const { ctrlWrapper } = require("../../helpers");
const getNews = require("./news");

module.exports = {
    getNews: ctrlWrapper(getNews),
};
