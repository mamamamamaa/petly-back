const { Notice } = require("../../models/notice");
const cloudinary = require("../../utils/cloudinary");


const addNotice = async (req, res) => {

  const image = await cloudinary.uploader.upload(req.file.path);

  const photoUrl = image.secure_url;
  const { _id: owner } = req.user;
  const result = await Notice.create({ ...req.body, owner, photoUrl });
  res.status(201).json(result);
}

module.exports = {addNotice};