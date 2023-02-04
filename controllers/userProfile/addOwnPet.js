const { ctrlWrapper } = require("../../helpers");
const OwnPet = require("../../models/ownPet");
const {ownPetCreateSchema} = require("../../schemas/usersOwnPet");
const {uploadCloudinary} = require('../../helpers/cloudinary')
const fs = require('fs/promises');
const path = require('path');
// const { HttpError } = require('../middlewares/HttpErrors');

const addOwnPet = async (req, res) => {
    const validationResult = ownPetCreateSchema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({status: validationResult.error})
      };
    const {_id: owner} = req.user;  
        const newOwnPet = await OwnPet.create({...req.body, owner});
        res.status(201).json(newOwnPet);
};

module.exports = {
    addOwnPet: ctrlWrapper(addOwnPet)
};