<<<<<<< HEAD:controllers/userProfile/updateAvatar.js
const { HttpError } = require("../../middlewares");
const cloudinary = require("../../utils/cloudinary");
const { User } = require("../../models/user");
=======
const { HttpError } = require('../../middlewares');
const cloudinary = require('../../utils/cloudinary');
const {User} = require('../../models/user');

>>>>>>> 99802c14787721c47817d703fa88f8a3a832c47b:controllers/auth/updateAvatar.js

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const avatar = await cloudinary.uploader.upload(req.file.path);
  const avatarURL = avatar.secure_url;

  if (!avatarURL) {
    throw HttpError(401, "Not authorized");
  }

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({ avatarURL });
};

<<<<<<< HEAD:controllers/userProfile/updateAvatar.js
module.exports = {
  updateAvatar,
};
=======

module.exports = updateAvatar;
>>>>>>> 99802c14787721c47817d703fa88f8a3a832c47b:controllers/auth/updateAvatar.js
