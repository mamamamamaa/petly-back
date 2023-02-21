const { Notice } = require("../../models/notice");
const cloudinary = require("../../utils/cloudinary");
const { addNoticeSellSchema } = require("../../schemas/noticesSell");
const { addNoticeLostFoundSchema } = require("../../schemas/noticeLostFound");
const { addNoticeGoodHandsSchema } = require("../../schemas/noticesGoodHands");
const { HttpError } = require("../../middlewares");

const validateBody = (data) => {
  switch (data.type) {
    case "lost/found":
      return addNoticeLostFoundSchema.validate(data, { abortEarly: false });
    case "good-hands":
      return addNoticeGoodHandsSchema.validate(data, { abortEarly: false });
    case "sell":
      return addNoticeSellSchema.validate(data, { abortEarly: false });
    default:
      return { error: "Invalid type of notice" };
  }
};
const addNotice = async (req, res, next) => {
  const { type } = req.body;
  if (!type) {
    next(HttpError(400, "Invalid notice type"));
    return;
  }

  const { error } = validateBody(req.body);
  if (error) {
    next(HttpError(400, error));
    return;
  }

  const image = await cloudinary.uploader.upload(req.file.path);
  const photoUrl = image.secure_url;
  const { _id: owner, email, mobilePhone } = req.user;
  const result = await Notice.create({
    ...req.body,
    owner,
    email,
    mobilePhone,
    photoUrl,
  });
  res.status(201).json(result);
};

module.exports = {
  addNotice,
};
