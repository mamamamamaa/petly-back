const OwnPet = require("../../models/ownPet");
const {ctrlWrapper} = require('../../helpers');

const getUserProfile = async (req, res) => {
     const {_id: owner} = req.user; 
    const user = req.user;
    console.log(user._id);
    const ownPets = await OwnPet.find({owner})
    // .populate('owner');
    res.json({user,
    pets: ownPets});
};


module.exports = {
    getUserProfile: ctrlWrapper(getUserProfile)
};
