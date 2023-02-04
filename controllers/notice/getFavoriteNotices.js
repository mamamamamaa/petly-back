const { Notice } = require("../../models/notice");

const getFavoriteNotices = async (req, res) => {
  const { _id } = req.user;
  const { favorite } = req.query;

  const favNotices = await Notice.find({ owner: _id, favorite }).populate(
    "owner"
  );
  res.json(favNotices);
};

module.exports = {
  getFavoriteNotices,
};
