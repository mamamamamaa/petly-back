const { Notice } = require("../../models/notice");
const { ctrlWrapper } = require('../../helpers');

const { HttpError } = require("../../middlewares");

const getFavoriteNotices = async (req, res) => {
  const { _id } = req.user;
  const { favorite } = req.query;

  const favNotices = await Notice.find({ owner: _id, favorite }).populate(
    "owner"
  );
  if (!favNotices) {
    throw HttpError(404);
  }

  res.json(favNotices);
};

module.exports = {
  getFavoriteNotices: ctrlWrapper(getFavoriteNotices),
};
