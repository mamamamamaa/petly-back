const { calculateExpiresTime } = require("../../helpers");
const { EXPIRES_IN } = process.env;

const getCurrent = async (req, res) => {
  const { email, name, refreshToken } = req.user;

  const expiresIn = calculateExpiresTime(EXPIRES_IN);

  res.json({ email, name, refreshToken, expiresIn });
};

module.exports = getCurrent;
