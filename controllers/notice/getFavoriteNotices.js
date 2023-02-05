const { Notice } = require("../../models/Notice");
const { ctrlWrapper } = require('../../helpers');

const getFavoriteNotices = async (req, res) => {
  const { _id } = req.user;
  const { favorite } = req.params;
console.log(req);
  const favNotices = await Notice.find({ owner: _id, favorite });
  //   .populate(
  //   "owner"
  // );
  res.json(favNotices);
};

module.exports = {
  getFavoriteNotices: ctrlWrapper(getFavoriteNotices),
};
