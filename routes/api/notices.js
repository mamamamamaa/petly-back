const router = require('express').Router();
const authenticate = require('../../middlewares/authenticate');
const {
  deleteNoticeById,
  paginateNotice,
  searchNoticeByTitleKeyword,
} = require('../../controllers/notice');


router.delete('/:id', authenticate, deleteNoticeById);
router.get('/paginateNotice', paginateNotice);
router.get('/searchNoticeByTitleKeyword', searchNoticeByTitleKeyword);

module.exports = router;