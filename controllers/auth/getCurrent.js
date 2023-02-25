const { calculateExpiresTime } = require("../../helpers");
const { EXPIRES_IN } = process.env;

const getCurrent = async (req, res) => {
  const { email, name, refreshToken, favorite, _id } = req.user;

  const expiresIn = calculateExpiresTime(EXPIRES_IN);
  res.json({ email, name, refreshToken, expiresIn, favorite, id: _id });
};

module.exports = getCurrent;
