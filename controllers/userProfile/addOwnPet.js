const OwnPet = require('../../models/ownPet');
const { ownPetCreateSchema } = require('../../schemas/usersOwnPet');
const cloudinary = require('../../utils/cloudinary');
const util = require('util');

const addOwnPet = async (req, res) => {
  const validationResult = ownPetCreateSchema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error });
  }

  const { _id: owner } = req.user;
  if (req.files.length > 0) {
    const cloudinaryUpload = util.promisify(cloudinary.uploader.upload);
    const pictureURL = await Promise.all(
      req.files.map(async (image) => {
        const result = await cloudinaryUpload(image.path);
        return result.secure_url;
      }),
    );
    const newOwnPet = await OwnPet.create({ ...req.body, owner, pictureURL });
    res.status(201).json(newOwnPet);
  } else {
    const newOwnPet = await OwnPet.create({ ...req.body, owner });
    res.status(201).json(newOwnPet);
  }
};

module.exports = {
  addOwnPet,
};
