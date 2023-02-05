const router = require('express').Router();
const authenticate = require('../../middlewares/authenticate');
const {
  getNoticeById,
  updateNoticeFavorite,
  getFavoriteNotices,
  deleteFavNotice,
  deleteNoticeById,
  paginateNotice,
  searchOneTitle,
  searchManyTitles,
} = require('../../controllers/notice');

router.get('/:noticeId', authenticate, getNoticeById);
router.patch('/:noticeId/favorite', authenticate, updateNoticeFavorite);

router.get('/:noticeId/favorite', authenticate, getFavoriteNotices);
router.delete('/:noticeId/favorite', authenticate, deleteFavNotice);


router.delete('/:id', authenticate, deleteNoticeById);
router.get('/paginateNotice', paginateNotice);
router.get('/searchOneTitle', searchOneTitle);
router.get('/searchManyTitles', searchManyTitles);

module.exports = router;
