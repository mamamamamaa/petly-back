const { ctrlWrapper } = require("../../helpers");
const getFriends = require("./friends");


module.exports = {
    getFriends: ctrlWrapper(getFriends),
};