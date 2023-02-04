const OwnPet = require("../../models/usersOwnPetModel");
// const {ownPetCreateSchema} = require("../../schemas/usersOwnPet");
const { HttpError } = require('../../middlewares/HttpError');
const { ctrlWrapper } = require("../../helpers");


const deleteOwnPet = async (req, res) => {
    const {ownPetId} = req.params;

    const deletedPet = await OwnPet.findByIdAndRemove(ownPetId);
    if(!deletedPet) {
    throw HttpError(404);
}
    res.json({message: 'Pet deleted'});
};

module.exports = {
    deleteOwnPet: ctrlWrapper(deleteOwnPet)
};