const { ctrlWrapper } = require("../../helpers");
const logout = require("./logout");
const register = require("./registration");
const login = require("./login");
const getCurrent = require("./getCurrent");
const updateUser = require("./updateUser");
const updateAvatar = require("./updateAvatar");
const refresh = require("./refresh");
const reverify = require("./reverify");
const verify = require("./verify");
const googleAuth = require("./googleAuth")

module.exports = {
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
  register: ctrlWrapper(register),
  updateUser: ctrlWrapper(updateUser),
  updateAvatar: ctrlWrapper(updateAvatar),
  refresh: ctrlWrapper(refresh),
  reverify: ctrlWrapper(reverify),
  verify: ctrlWrapper(verify),
  googleAuth: ctrlWrapper(googleAuth)
};
