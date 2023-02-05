const { Notice } = require("../../models/Notice");
const { ctrlWrapper } = require('../../helpers');

const deleteFavNotice = async (req, res) => {
  const { noticeId } = req.params;
  const { favorite } = req.body;

  const deletedNotice = await Notice.findByIdAndRemove(noticeId, { favorite });
  res.json(deletedNotice);
};

module.exports = {
  deleteFavNotice: ctrlWrapper(deleteFavNotice),
};
