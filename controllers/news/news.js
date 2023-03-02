const axios = require("axios");
const { HttpError } = require("../../middlewares");
const { NEWSSERVER, NEWSKEY } = process.env;

const getNews = async (req, res) => {
  const { pageNews = 1, limit = 6, query = "pets" } = req.query;
  const options = {
    method: "GET",
    url: NEWSSERVER,
    params: {
      q: query,
      page: pageNews,
      pageSize: limit,
      apiKey: NEWSKEY,
      sortBy: "publishedAt",
    },
  };

  if (pageNews < 1 || limit < 1) {
    throw HttpError(400);
  }
  if (Number.isNaN(pageNews) || Number.isNaN(limit)) {
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
    throw HttpError(400);
  }
};

module.exports = getNews;
