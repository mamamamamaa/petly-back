const axios = require('axios');
const URL = require('url');
const queryString = require('query-string');

const googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);
  const code = urlParams.code;
  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
      grant_type: 'authorization_code',
      code,
    },
  });

  const userData = await axios({
    // here is object for database or other logic
    url: 'https://www.googleapis.com/oath2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });
  // our logic
  // userData is a big object, also has a name property
  // userData.data.email // go to dataBase if no user we register user here
  // if he is, we pass it and give him a token
  return res.redirect(
    // redirect user to frontend
    // point to the email or it can be token in query params
    `${process.env.FRONTED_URL}?email=${userData.data.email}`
    // point to the access_token token in query params
    // google-redirect to follow user NOT to empty string on frontend
    // `${process.env.FRONTED_URL}/google-redirect/?accessToken=${accessToken}&refreshToken=${refreshToken}`,
  );
};
module.exports = googleRedirect;
