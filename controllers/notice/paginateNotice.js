const { Notice } = require("../../models/notice");
const { HttpError } = require("../../middlewares");

const paginateNotice = async (req, res) => {
  const { page = 1, limit = 8, type = null } = req.query;
  const skip = (page - 1) * limit;

  if (page < 1 || limit < 1) {
    throw HttpError(400);
  }
  if (Number.isNaN(page) || Number.isNaN(limit)) {
    throw HttpError(400, "Page or limit isn't number");
  }

  if (limit > 100) {
    throw HttpError(400, "Page limit max 100");
  }

  const result = await Notice.find(
    { type },
    {},
    {
      skip,
      limit: Number(limit),
    }
  );
  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = {
  paginateNotice,
};
