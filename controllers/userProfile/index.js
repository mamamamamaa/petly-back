const { addOwnPet } = require("./addOwnPet");
const { deleteOwnPet } = require("./deleteOwnPet");
const { getUserProfile } = require("./getUserProfile");
const { updateAvatar } = require("./updateAvatar");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  addOwnPet: ctrlWrapper(addOwnPet),
  deleteOwnPet: ctrlWrapper(deleteOwnPet),
  getUserProfile: ctrlWrapper(getUserProfile),
  updateAvatar: ctrlWrapper(updateAvatar),
};
