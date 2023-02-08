const { Notice } = require("../../models/notice");
const { HttpError } = require("../../middlewares");
const mongoose = require("mongoose")

const getFavoriteNotices = async (req, res) => {
  const { favorite } = req.user;
  const {
    page = 1,
    limit = 20,
  } = req.query;
  const skip = (page - 1) * limit;


  if (!favorite) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "missing favorite",
    });
  }

  const favNotices = await Notice.find({ _id: { $in: favorite.map((notice) => mongoose.Types.ObjectId(notice)) } }, "-createdAt -updatedAt", { skip, limit })

  res.json(favNotices)

  if (!favNotices) {
    throw HttpError(404);
  }

  res.json(favNotices);
};

module.exports = {
  getFavoriteNotices,
};
