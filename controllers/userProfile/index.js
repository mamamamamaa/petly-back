const { addOwnPet } = require("./addOwnPet");
const { deleteOwnPet } = require("./deleteOwnPet");
const { getUserProfile } = require("./getUserProfile");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  addOwnPet: ctrlWrapper(addOwnPet),
  deleteOwnPet: ctrlWrapper(deleteOwnPet),
  getUserProfile: ctrlWrapper(getUserProfile),
};
