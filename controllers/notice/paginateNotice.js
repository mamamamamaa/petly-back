const { Notice } = require('../../models/Notice');

const HttpError = require('../middlewares');
const ctrlWrapper = require('../helpers');

const paginateNotice = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  const {type} = Notice.type;
  const result = await Notice.find(
    { type },
    {},
    {
      skip,
      limit: Number(limit),
    },
  );
  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json({
    message: `${result}`,
  });
};

module.exports = {
  paginateNotice: ctrlWrapper(paginateNotice),
};