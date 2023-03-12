
const querystring = require('querystring');
const googleAuth = async (req, res) => { // request to google
  const params = {
    client_id: process.env.client_id,
    // after google get your settings params, do logic and give us access to athorization
    // link where google will do redirect request
    // there we give google settings object
    redirect_uri: `${process.env.BASE_URL}/api/auth/google-redirect`,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email', // what info we will take from user
      // 'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    response_type: 'code', // type of access
    access_type: 'offline',
    prompt: 'consent', // service google thing
  };

  const stringifiedParams = querystring.stringify(params);
  return res.redirect(
    // we brake the chain here
    // where google can give a control
    // we pass here all params which named upper
    `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
  );
};

module.exports = googleAuth;
