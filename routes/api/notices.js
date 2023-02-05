const router = require('express').Router();
const authenticate = require('../../middlewares/authenticate');
const {
  deleteNoticeById,
  paginateNotice,
  searchNoticeByTitleKeyword,
  searchNoticeByTitleKeywordOverlapMany,
} = require('../../controllers/notice');


router.delete('/:id', authenticate, deleteNoticeById);
router.get('/paginateNotice', paginateNotice);
router.get('/searchNoticeByTitleKeyword', searchNoticeByTitleKeyword);
router.get('/searchNoticeByTitleKeywordOverlapMany', searchNoticeByTitleKeywordOverlapMany);

module.exports = router;