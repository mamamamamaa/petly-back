const router = require("express").Router();
const authenticate = require("../../middlewares/authenticate");
const upload = require("../../utils/multer");

const {
  addNotice,
  deleteNoticeById,
  paginateNotice,
  searchOneTitle,
  searchManyTitles,
  getNoticeById,
  addNoticeFavorite,
  delNoticeFavorite,
  getFavoriteNotices,
} = require("../../controllers/notice");

router.get("/paginateNotice", paginateNotice);
router.get("/searchOneTitle", searchOneTitle);
router.get("/searchManyTitles", searchManyTitles);
router.get("/:noticeId", getNoticeById);
router.get("/", authenticate, getFavoriteNotices);
router.patch("/addfavorite/:noticeId", authenticate, addNoticeFavorite);
router.patch("/delfavorite/:noticeId", authenticate, delNoticeFavorite);
router.delete("/:noticeId", authenticate, deleteNoticeById);
router.post("/", authenticate, upload.single("photoUrl"), addNotice);

module.exports = router;