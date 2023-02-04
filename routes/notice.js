const route = require("express").Router();
const authenticate = require("../../middlewares/authenticate");
const {
  getNoticeById,
  updateNoticeFavorite,
  getFavoriteNotices,
  deleteFavNotice,
} = require("../controllers/notice");

route.get("/:noticeId", authenticate, getNoticeById);
route.patch("/:noticeId/favorite", authenticate, updateNoticeFavorite);

route.get("/:noticeId/favorite", authenticate, getFavoriteNotices);
route.delete("/:noticeId/favorite", authenticate, deleteFavNotice);
