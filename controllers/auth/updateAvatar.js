const { HttpError } = require('../../middlewares');
const cloudinary = require('../../utils/cloudinary');
const {User} = require('../../models/user');


const updateAvatar = async (req, res) => {
    const {_id} = req.user;

    const avatar = await cloudinary.uploader.upload(req.file.path);
    const avatarURL =  avatar.secure_url;

    if (!avatarURL) {
        throw HttpError(401, "Not authorized")
    };

    await User.findByIdAndUpdate(_id, {avatarURL});

    res.status(200).json({avatarURL});
};


module.exports = updateAvatar;