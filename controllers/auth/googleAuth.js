const queryString = require("query-string");


const googleAuth = async (req, res) => {
    const stringifiedParams = queryString.stringify({
        client_id: process.env.client_id,
        redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`, // where google can give a control
        scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
        ].join(" "),
        response_type: "code",
        access_type: "offline",
        prompt: "consent",
    });
    return res.redirect( // we brake the chain here
      `https://accounts.google.com/o/oath2/v2/auth?${stringifiedParams}`,
    );
};

module.exports = googleAuth;