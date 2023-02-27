const router = require("express").Router();
const authenticate = require("../../middlewares/authenticate");
const upload = require("../../utils/multer");

const {
  addNotice,
  deleteNoticeById,
  paginateNotice,
  searchNotice,
  getNoticeById,
  addNoticeFavorite,
  delNoticeFavorite,
  getFavoriteNotices,
  getOnlyUserNotice,
} = require("../../controllers/notice");

router.get("/favorite", authenticate, getFavoriteNotices);
router.get("/", authenticate, getOnlyUserNotice);
router.post("/", authenticate, upload.array("photoUrl", 5), addNotice);
router.get("/paginateNotice", paginateNotice);
router.get("/searchManyTitles", searchNotice);
router.patch("/addfavorite/:noticeId", authenticate, addNoticeFavorite);
router.patch("/delfavorite/:noticeId", authenticate, delNoticeFavorite);
router.delete("/ads/:noticeId", authenticate, deleteNoticeById);
router.get("/ads/:noticeId", getNoticeById);

module.exports = router;
