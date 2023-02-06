const { Notice } = require('../../models/notice');
const { HttpError } = require('../../middlewares');

const deleteFavNotice = async (req, res) => {
  const { noticeId } = req.params;
  const { _id: userId } = req.user;

  const deletedNotice = await Notice.findByIdAndUpdate(noticeId, {
    $pull: {
      favorite: userId,
    },
  });

  if (!deletedNotice) {
    throw HttpError(404);
  }

  res.status(200).json({
    message: `Deleted userId ${userId} from favorite array of noticeId ${noticeId}`,
  });
};

module.exports = {
  deleteFavNotice,
};
