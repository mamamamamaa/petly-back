const { Notice } = require("../../models/notice");
const { HttpError } = require("../../middlewares");

const searchManyTitles = async (req, res) => {
  const { type, title = null } = req.query;
  const result = await Notice.find({
    type,
    title: { $regex: title, $options: "gi" },
  }).exec();
  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = {
  searchManyTitles,
};
