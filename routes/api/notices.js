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
  updateNoticeFavorite,
  getFavoriteNotices,
  deleteFavNotice,
} = require("../../controllers/notice");

router.get("/paginateNotice", paginateNotice);
router.get("/searchOneTitle", searchOneTitle);
router.get("/searchManyTitles", searchManyTitles);
router.get("/:noticeId", getNoticeById);
router.get("/:noticeId/favorite", authenticate, getFavoriteNotices);
router.patch("/:noticeId/favorite", authenticate, updateNoticeFavorite);
router.delete("/:id", authenticate, deleteNoticeById);
router.delete("/:noticeId/favorite", authenticate, deleteFavNotice);

router.post("/", upload.single('photoUrl'), authenticate, addNotice);

module.exports = router;
