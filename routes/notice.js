const route = require("express").Router();
const authenticate = require("../../middlewares/authenticate");
const {
  getOnlyYourNotice,
  getNoticeById,
  updateNoticeFavorite,
} = require("../controllers/notice");

route.get("/", authenticate, getOnlyYourNotice);
route.get("/:noticeId", authenticate, getNoticeById);
route.patch("/:noticeId/favorite", authenticate, updateNoticeFavorite);
