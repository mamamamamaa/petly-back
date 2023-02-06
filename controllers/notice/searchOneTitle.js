const { Notice } = require("../../models/notice");
const { HttpError } = require("../../middlewares");

const searchOneTitle = async (req, res) => {
  const { title = null } = req.query;
  const result = await Notice.findOne({ title });

  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = {
  searchOneTitle,
};
