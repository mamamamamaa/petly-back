const { HttpError } = require("../../middlewares");
const { User } = require("../../models/user");

const updateUser = async (req, res, next) => {
  const { _id } = req.user;
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    next(HttpError(409, "Email in use"));
    return;
  }

  const updatedUser = await User.findByIdAndUpdate(_id, req.body,

    { new: true }
  );

  if (!updatedUser) {
    throw HttpError(404);
  }
  res.json(updatedUser);
};

module.exports = updateUser;
