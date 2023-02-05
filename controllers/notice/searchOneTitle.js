const { Notice } = require('../../models/Notice');

const { HttpError } = require('../../middlewares');
const { ctrlWrapper } = require('../../helpers');

const searchOneTitle = async (req, res) => {
  const { title = null } = req.query;
  const result = await Notice.findOne({ title });
  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = {
  searchOneTitle: ctrlWrapper(searchOneTitle),
};
