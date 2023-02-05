const { Notice } = require("../../models/notice");
const { HttpError } = require("../../middlewares");

const deleteFavNotice = async (req, res) => {
  const { noticeId } = req.params;

  const deletedNotice = await Notice.findByIdAndUpdate(noticeId, {
    favorite: false,
  });

  if (!deletedNotice) {
    throw HttpError(404);
  }

  res.status(200).json({ message: `Deleted ${noticeId} from favorite` });
};

module.exports = {
  deleteFavNotice,
};
