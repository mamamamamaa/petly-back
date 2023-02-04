const OwnPet = require("../../models/usersOwnPetModel");
const {ctrlWrapper} = require('../../helpers');
// const {ownPetCreateSchema} = require("../../schemas/usersOwnPet");
// const { HttpError } = require('../middlewares/HttpErrors');

const listOwnPets = async (req, res) => {
  
    // const ownPetsAndUser = await OwnPet.find().populate('user');
        // const {_id: owner} = req.user; 
        // const id = 63dd58f39ceda9d2a2de07a9
    const ownPets = await OwnPet.find({});
    res.json(ownPets);
};


module.exports = {
    listOwnPets: ctrlWrapper(listOwnPets)
};
