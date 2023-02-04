const News = require("../../models/news");

const getNews = async (req, res) => {
    
    const {page = 1, limit = 6} = req.query;
    const skip = (page - 1) * limit;
    
    const allNews = await News.find({}, "-createdAt -updatedAt", {skip, limit: Number(limit)});

    res.json({
        status: "success",
        code: 200,
        data: {
            result: allNews
        }
    });
};

module.exports = getNews;