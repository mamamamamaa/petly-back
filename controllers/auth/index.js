const { ctrlWrapper } = require("../../helpers");
const logout = require("./logout");
const register = require("./registration");
const login = require("./login");
const getCurrent = require("./getCurrent");

module.exports = {
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
  register: ctrlWrapper(register),
};
