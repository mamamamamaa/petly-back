const { User } = require("../../models/user");
const { HttpError } = require("../../middlewares");

const deleteFavNotice = async (req, res) => {
  const { noticeId } = req.params;
  const { _id: user } = req.user;

  const deletedNotice = await User.findByIdAndUpdate(user, {
    $pull: {
      favorite: noticeId
    }
  }, {
    new: true
  })

  if (!deletedNotice) {
    throw HttpError(404);
  }

  res.status(200).json({ message: `Deleted ${noticeId} from favorite` });
};

module.exports = {
  deleteFavNotice,
};
