const express = require("express");
const { getNews } = require("../../controllers/news");
const { authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, getNews);

module.exports = router;
