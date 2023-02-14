const { HttpError } = require("../../middlewares");
const { Notice } = require("../../models/notice");

const getOnlyYourNotice = async (req, res) => {
  console.dir(req);
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Notice.find(
    { owner },
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

  res.status(200).json({ contacts, status: "succsess" });
};

module.exports = { getOnlyYourNotice };
