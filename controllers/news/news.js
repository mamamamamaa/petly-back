const News = require("../../models/news");

const getNews = async (req, res) => {
    
    const {page = 1, limit = 20} = req.query;
    const skip = (page - 1) * limit;
    
    const allNews = await News.find({}, "-createdAt -updatedAt", {skip, limit: Number(limit)}).sort({ date: -1 });

    res.json({
        status: "success",
        code: 200,
        data: {
            result: allNews
        }
    });
};

module.exports = getNews;