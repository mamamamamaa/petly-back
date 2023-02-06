const { Notice } = require('../../models/notice');
const { HttpError } = require('../../middlewares');

const deleteFavNotice = async (req, res) => {
  const { noticeId } = req.params;
  const { _id: userId } = req.user;
  const user = await Notice.findOne({ favorite: userId });
  if (user === null) {
    throw HttpError(404);
  }
  
  user.favorite.pull(userId);
  user.owner = userId;
  await user.save();

  res.status(200).json({
    message: `Deleted userId ${userId} from favorite array of noticeId ${noticeId}`,
  });
};

module.exports = {
  deleteFavNotice,
};
