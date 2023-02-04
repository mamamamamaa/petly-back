const { ctrlWrapper } = require("../../helpers");
const OwnPet = require("../../models/ownPet");
const {ownPetCreateSchema} = require("../../schemas/usersOwnPet");
const {cloudinary} = require('../../helpers');


const addOwnPet = async (req, res) => {
    const validationResult = ownPetCreateSchema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({status: validationResult.error})
      };

      const picture = await cloudinary.uploader.upload(req.file.path);
      const pictureURL =  picture.secure_url;
    const {_id: owner} = req.user;  
    const newOwnPet = await OwnPet.create({...req.body, owner, pictureURL});
    res.status(201).json(newOwnPet);
};

module.exports = {
    addOwnPet: ctrlWrapper(addOwnPet)
};