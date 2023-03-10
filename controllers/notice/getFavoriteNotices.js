const { Notice } = require("../../models/notice");
const { HttpError } = require("../../middlewares");
const mongoose = require("mongoose");

const getFavoriteNotices = async (req, res) => {
  const { favorite } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  if (page < 1 || limit < 1) {
    throw HttpError(400);
  }
  if (Number.isNaN(page) || Number.isNaN(limit)) {
    throw HttpError(400, "Page or limit isn't number");
  }
  if (limit > 100) {
    throw HttpError(400, "Page limit max 100");
  }
  if (!favorite) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "missing favorite",
    });
  }

  const totalCount = favorite.length;
  const favNotices = await Notice.find(
    { _id: { $in: favorite.map((notice) => mongoose.Types.ObjectId(notice)) } },
    "-createdAt -updatedAt",
    { skip, limit }
  ).sort({ createdAt: -1 });
  if (!favNotices) {
    throw HttpError(404);
  }
  res.json({ totalCount, items: favNotices });
};

module.exports = {
  getFavoriteNotices,
};
