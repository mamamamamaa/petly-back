const querystring = require('querystring');
const axios = require('axios');
const bcrypt = require('bcryptjs');
const { User } = require('../../models/user');
const {
  generateRefreshToken,
  generateAccessToken,
  calculateExpiresTime,
} = require('../../helpers');
const { EXPIRES_IN } = process.env;
const mongoose = require('mongoose');
const googleRedirect = async (req, res) => {
  // response from google
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = querystring.parse(urlObj.search); // urlObj.search - google access params from big object
  const code = urlParams['?code']; // urlParams all google settings, code for access
  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      redirect_uri: `${process.env.BASE_URL}/api/auth/google-redirect`,
      grant_type: 'authorization_code',
      code,
    },
  });
  const userData = await axios({
    // here is object for database or other logic
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });
  const email = userData.data.email;
  const user = await User.findOne({ email });
  if (!user) {
    const hashPassword = await bcrypt.hash(tokenData.data.access_token, 10);
    const _id = await mongoose.Types.ObjectId();
    await User.create({
      password: hashPassword,
      verify: true,
      mobilePhone: 'incognito',
      city: 'incognito',
      name: 'incognito',
      favorite: [],
      verificationToken: 'incognito',
      email,
      _id,
      accessToken: generateAccessToken(_id),
      refreshToken: generateRefreshToken(_id),
    });
  }
  const existUser = await User.findOne({ email });
  const { password, city, name, mobilePhone, _id, favorite } = existUser;
  const accessToken = generateAccessToken(existUser);
  const refreshToken = generateRefreshToken(existUser);
  await User.findByIdAndUpdate(existUser._id, { accessToken, refreshToken });
  const expiresIn = calculateExpiresTime(EXPIRES_IN);
  return res.redirect(
    // redirect user to frontend
    `${process.env.CLIENT_URL}?accessToken=${accessToken}&refreshToken=${refreshToken}&expiresIn=${expiresIn}&password=${password}&email=${email}&name=${name}&mobilePhone=${mobilePhone}&city=${city}&id=${_id}&favorite=${favorite}`
  );
};
module.exports = googleRedirect;
 
