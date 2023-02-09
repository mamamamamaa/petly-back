const { User } = require("../../models/user");
const { HttpError } = require("../../middlewares");

const { CLIENT_URL } = process.env;

const verify = async (req, res, next) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    next(HttpError(404, "User not found"));
  }

  await User.findByIdAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  });

  res.redirect(CLIENT_URL);
};

module.exports = verify;
