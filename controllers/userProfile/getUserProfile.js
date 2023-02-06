const OwnPet = require("../../models/ownPet");

const getUserProfile = async (req, res) => {
  const { _id: owner } = req.user;
  const user = req.user;
  const ownPets = await OwnPet.find({ owner });
  res.json({ user, pets: ownPets });
};

module.exports = {
  getUserProfile,
};
