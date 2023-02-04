// const ownpet = require("../../models/usersOwnPetModel");
// const {ownPetCreateSchema} = require("../../schemas/usersOwnPet");
// const { HttpError } = require('../middlewares/HttpErrors');

// const listOwnPets = async (req, res) => {
//     // const {_id: owner} = req.user; 
//     const ownPets = await ownpet.find()
//     res.json(ownPets);
// };

// const addOwnPet = async (req, res) => {
//     const validationResult = ownPetCreateSchema.validate(req.body);
//     if (validationResult.error) {
//         return res.status(400).json({status: validationResult.error})
//       };
//     // const {_id: owner} = req.user;  
//     const newOwnPet = await ownpet.create({...req.body});
//     res.status(201).json(newOwnPet);
// };

// const deleteOwnPet = async (req, res) => {
//     const {ownPetId} = req.params;

//     const deletedPet = await ownpet.findByIdAndRemove(ownPetId);
//     if(!deletedPet) {
//         throw HttpError(404);
//     }
//     res.json({message: 'Pet deleted'});
// };

// module.exports = {
//     listOwnPets,
// };
