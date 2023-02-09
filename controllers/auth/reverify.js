const { sgMail, verificationMessage } = require("../../helpers");
const { HttpError } = require("../../middlewares");
const { User } = require("../../models/user");
const reverifySchema = require("../../schemas/reverifySchema");

const reverify = async (req, res, next) => {
  const { error, value: email } = reverifySchema.validate(req.body);

  if (error) {
    next(HttpError(400, "Missing required field email"));
  }

  const user = await User.findOne({ email });

  if (!user) {
    next(HttpError(400, "User is not registered"));
  }

  if (user.verify) {
    next(HttpError(400, "Verification has already been passed"));
  }

  const { verifyMessage } = verificationMessage(email);

  await sgMail.send(verifyMessage);

  res.status(200).json({ message: "Verification mail has successfully send" });
};

module.exports = reverify;
