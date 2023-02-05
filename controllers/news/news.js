const { HttpError } = require("../../middlewares");
const News = require("../../models/news");

const getNews = async (req, res) => {
    
    const {page = 1, limit = 6, query = ''} = req.query;
    const skip = (page - 1) * limit;
    const condition = query === '' ? {} : { description: {$regex: query} };

    const allNews = await News.find(condition, "-createdAt -updatedAt", {skip, limit: Number(limit)}).sort({ date: -1 });

    if(allNews.length === 0){
        throw HttpError(404);
    }

    res.json({
        status: "success",
        code: 200,
        data: {
            result: allNews
        }
    });
};

module.exports = getNews;