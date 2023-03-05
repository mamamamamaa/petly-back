const { User } = require("../../models/user");

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { accessToken: null, refreshToken: null });

  res.clearCookie("accessToken")
  res.clearCookie("refreshToken")

  res.json({ message: "Logout success" });
};

module.exports = logout;
