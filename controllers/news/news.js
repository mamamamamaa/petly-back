const axios = require("axios");
const { HttpError } = require("../../middlewares");

const { X_RAPID_API_HOST, X_RAPID_API_URL, X_RAPID_API_KEY } = process.env;

const getNews = async (req, res) => {
  const { page = 1, limit = 6, query = "animals" } = req.query;

  const options = {
    method: "GET",
    url: X_RAPID_API_URL,
    params: {
      q: query,
      pageNumber: page,
      pageSize: limit,
      autoCorrect: "true",
      fromPublishedDate: "null",
      toPublishedDate: "null",
    },
    headers: {
      "X-RapidAPI-Key": X_RAPID_API_KEY,
      "X-RapidAPI-Host": X_RAPID_API_HOST,
    },
  };

  if (page < 1 || limit < 1) {
    throw HttpError(400);
  }
  if (Number.isNaN(page) || Number.isNaN(limit)) {
    throw HttpError(400, "Page or limit isn't number");
  }
  if (limit > 100) {
    throw HttpError(400, "Page limit max 100");
  }

  try {
    const dynamicNews = await axios.request(options);
    res.json({
      status: "success",
      code: 200,
      data: {
        result: dynamicNews.data,
      },
    });
  } catch (error) {
    console.log(error);
    throw HttpError(400);
  }
};

module.exports = getNews;
