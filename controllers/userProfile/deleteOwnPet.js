const OwnPet = require("../../models/ownPet");
const { HttpError } = require("../../middlewares/HttpError");

const deleteOwnPet = async (req, res) => {
  const { ownPetId } = req.params;

  const deletedPet = await OwnPet.findByIdAndRemove(ownPetId);
  if (!deletedPet) {
    throw HttpError(404);
  }
  res.status(200).json({ data: deletedPet, message: "Pet deleted" });
};

module.exports = {
  deleteOwnPet,
};
