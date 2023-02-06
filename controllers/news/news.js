
const axios = require("axios");

const { X_RAPID_API_HOST, X_RAPID_API_URL, X_RAPID_API_KEY } = process.env; 

const getNews = async (req, res) => {    
    const {page = 1, limit = 6, query = 'animals'} = req.query;

    const options = {
    method: 'GET',
    url: X_RAPID_API_URL,
    params: {
        q: query,
        pageNumber: page,
        pageSize: limit,
        autoCorrect: 'true',
        fromPublishedDate: 'null',
        toPublishedDate: 'null'
    },
    headers: {
        'X-RapidAPI-Key': X_RAPID_API_KEY,
        'X-RapidAPI-Host': X_RAPID_API_HOST
    }
    };


    try {
        const dynamicNews = await axios.request(options);
    res.json({
        status: "success",
        code: 200,
        data: {
            result: dynamicNews.data
        }
    });
    } catch (error) {
        console.log(error);
    }    
};

module.exports = getNews;
