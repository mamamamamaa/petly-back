const { Notice } = require('../../models/notice');

const updateNoticeFavorite = async (req, res) => {
  const { noticeId } = req.params;

  const { _id: userId } = req.user;

  const result = await Notice.findByIdAndUpdate(noticeId, {
    $addToSet: {
      favorite: userId,
    },
  }).exec();
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `Not found contact id: ${noticeId}`,
      data: 'Not Found',
    });
  }
};

module.exports = { updateNoticeFavorite };
