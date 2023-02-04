const OwnPet = require("../../models/usersOwnPetModel");
const {ctrlWrapper} = require('../../helpers');
// const {ownPetCreateSchema} = require("../../schemas/usersOwnPet");
// const { HttpError } = require('../middlewares/HttpErrors');

const listOwnPets = async (req, res) => {
  
    // const ownPetsAndUser = await OwnPet.find().populate('user');
        const {_id: owner} = req.user; 
    const ownPets = await OwnPet.find({owner});
    res.json(ownPets);
};


module.exports = {
    listOwnPets: ctrlWrapper(listOwnPets)
};
