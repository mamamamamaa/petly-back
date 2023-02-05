<<<<<<< HEAD
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
=======
const {addOwnPet} = require('./addOwnPet');
const {deleteOwnPet} = require('./deleteOwnPet');
const {getUserProfile} = require('./getUserProfile');


module.exports = {
    addOwnPet,
    deleteOwnPet,
    getUserProfile
};
>>>>>>> 99802c14787721c47817d703fa88f8a3a832c47b
