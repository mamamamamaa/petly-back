const { Notice } = require('../../models/Notice');

const { HttpError } = require('../../middlewares');
const { ctrlWrapper } = require('../../helpers');

const searchNoticeByTitleKeyword = async (req, res) => {
  const { title = null } = req.query;
  const result = await Notice.findOne({ title });
  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json({
    message: `${result} with ${title}`,
  });
};

module.exports = {
  searchNoticeByTitleKeyword: ctrlWrapper(searchNoticeByTitleKeyword),
};
