const { Notice } = require('../../models/Notice');

const HttpError = require('../middlewares');
const ctrlWrapper = require('../helpers');

const searchNoticeByTitleKeyword = async (req, res) => {
    const { title } = Notice.title;
  const result = await Notice.find({ title });
  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json({
    message: `${result}`,
  });
};

module.exports = {
  searchNoticeByTitleKeyword: ctrlWrapper(searchNoticeByTitleKeyword),
};
