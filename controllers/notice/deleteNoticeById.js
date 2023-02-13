const { Notice } = require("../../models/notice");

const { HttpError } = require("../../middlewares");

const deleteNoticeById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const result = await Notice.findOneAndDelete({ $and: [{ id }, { owner }] });
  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json({
    message: `Delete with id ${id} success`,
  });
};

module.exports = {
  deleteNoticeById,
};
