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
const { GOOGLE_AUTH_PASSWORD } = process.env;

const googleRedirect = async (req, res) => {
  // response from google
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = querystring.parse(urlObj.search); // urlObj.search - google access params from big object
  const code = urlParams['?code']; // urlParams all google settings, code for access
  // check code by debugger if no undefined, if no empty string
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
    const hashPassword = await bcrypt.hash(GOOGLE_AUTH_PASSWORD, 10);
    await User.create({
      password: hashPassword,
      verify: true,
      mobilePhone: '',
      city: '',
      name: '',
    });
  }
  const { password, city, name, mobilePhone, _id, favorite } = user;
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  await user.findByIdAndUpdate(user._id, { accessToken, refreshToken });
  const expiresIn = calculateExpiresTime(EXPIRES_IN);
  return res.redirect(
    // redirect user to frontend
    `${process.env.CLIENT_URL}?accessToken=${accessToken}&refreshToken=${refreshToken}&expiresIn=${expiresIn}&password=${password}&email=${email}&name=${name}&mobilePhone=${mobilePhone}&city=${city}&id=${_id}&favorite=${favorite}`
  );

  // our logic
  // userData is a big object, also has a name property
  // userData.data.email // go to dataBase if no user we register user here
  // if he is, we pass it and give him a token
  return res.redirect(
    // redirect user to frontend
    // point to the email or it can be token in query params
    `${process.env.CLIENT_URL}?accessToken=${tokenData.data.access_token}`
    // `${process.env.FRONTED_URL}?email=${userData.data.email}`
    // point to the access_token token in query params
    // google-redirect to follow user NOT to empty string on frontend
    // `${process.env.FRONTED_URL}/google-redirect/?accessToken=${accessToken}&refreshToken=${refreshToken}`,
  );
};
module.exports = googleRedirect;
