const { Notice } = require('../../models/Notice');

const { HttpError } = require('../../middlewares');
const { ctrlWrapper } = require('../../helpers');

const searchManyTitles = async (req, res) => {
  const { title = null } = req.query;
  const result = await Notice.find({
    title: { $regex: title, $options: 'gi' },
  }).exec();
  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = {
  searchManyTitles: ctrlWrapper(searchManyTitles),
};
