const { Notice } = require("../../models/notice");

const { HttpError } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const deleteFavNotice = async (req, res) => {
  const { noticeId } = req.params;
  const { favorite } = req.body;

  const deletedNotice = await Notice.findByIdAndRemove(noticeId, { favorite });
  if (!deletedNotice) {
    throw HttpError(404);
  }

  res.status(200).json({
    message: `Deleted ${noticeId} from favotite`,
  });
};

module.exports = {
  deleteFavNotice: ctrlWrapper(deleteFavNotice),
};
