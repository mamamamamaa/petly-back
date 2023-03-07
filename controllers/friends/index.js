const { ctrlWrapper } = require("../../helpers");
const getFriends = require("./friends");
const getTeam = require("./ourTeam");

module.exports = {
  getFriends: ctrlWrapper(getFriends),
  getTeam: ctrlWrapper(getTeam),
};
