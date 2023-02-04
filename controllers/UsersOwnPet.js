const {OwnPet} = require("../models/usersOwnPetModel");
const {ownPetCreateSchema} = require("../schemas/usersOwnPet");
const { HttpError } = require('../middlewares/HttpErrors');

const listOwnPets = async (req, res) => {
    try {
        // const ownPetsAndUser = await OwnPet.find().populate('user');
        // const {_id: owner} = req.user; 
        // const id = 63dd58f39ceda9d2a2de07a9
        const ownPets = await OwnPet.find({});
        res.json(ownPets);
    } catch (error) {
        console.log(error.message);
    }
};

const addOwnPet = async (req, res) => {
   try {
        const validationResult = ownPetCreateSchema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({status: validationResult.error})
      };
    // const {_id: owner} = req.user;  
        const newOwnPet = await OwnPet.create({...req.body});
        res.status(201).json(newOwnPet);
   } catch (error) {
        console.log(error.message);
   }
};

const deleteOwnPet = async (req, res, next) => {
    try {
        const {ownPetId} = req.params;

        const deletedPet = await OwnPet.findByIdAndRemove(ownPetId);
        if(!deletedPet) {
        throw HttpError(404);
    }
    res.json({message: 'Pet deleted'});
    } catch (error) {
        console.log(error.message);;
    }
    
};

module.exports = {
    listOwnPets,
    addOwnPet,
    deleteOwnPet
};
