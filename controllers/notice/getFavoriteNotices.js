const { Notice } = require("../../models/notice");

const { HttpError } = require("../../middlewares");

const getFavoriteNotices = async (req, res) => {
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const favNotices = await Notice.find(
    { favorite },
    "-createdAt -updatedAt",
    { skip, limit }
  );
  res.json(favNotices)


  if (!favNotices) {
    throw HttpError(404);
  }

  res.json(favNotices);
};

module.exports = {
  getFavoriteNotices,
};
