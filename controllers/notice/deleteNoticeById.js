const { Notice } = require('../../models/Notice');

const HttpError = require('../middlewares');
const ctrlWrapper = require('../helpers');

const deleteNoticeById = async (req, res) => {
    const { id } = req.params;
  const result = await Notice.findOneAndDelete(id);
  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json({
    message: `Delete ${result} success`,
  });
};

module.exports = {
  deleteNoticeById: ctrlWrapper(deleteNoticeById),
};
