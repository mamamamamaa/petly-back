const { Notice } = require("../../models/notice");

const deleteFavNotice = async (req, res) => {
  const { noticeId } = req.params;
  const { favorite } = req.body;

  const deletedNotice = await Notice.findByIdAndRemove(noticeId, { favorite });
  res.json(deletedNotice);
};

module.exports = {
  deleteFavNotice,
};
