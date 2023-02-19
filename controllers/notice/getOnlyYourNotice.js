const { HttpError } = require("../../middlewares");
const { Notice } = require("../../models/notice");

const getOnlyYourNotice = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, query = "" } = req.query;
  const skip = (page - 1) * limit;
  const regex = new RegExp(`.*${query}.*`, "i");
  const totalCount = await Notice.count({ owner });
  const contacts = await Notice.find(
    { owner, title: { $regex: regex } },
    {},
    {
      skip,
      limit,
    }
  ).populate("owner", "_id email");

  if (page < 1 || limit < 1) {
    throw HttpError(400);
  }
  if (Number.isNaN(page) || Number.isNaN(limit)) {
    throw HttpError(400, "Page or limit isn't number");
  }

  if (limit > 100) {
    throw HttpError(400, "Page limit max 100");
  }

  res.status(200).json({ totalCount, items: contacts });
};

module.exports = { getOnlyYourNotice };
