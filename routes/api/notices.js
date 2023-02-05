const router = require('express').Router();
const authenticate = require('../../middlewares/authenticate');
const {
  deleteNoticeById,
  paginateNotice,
  searchOneTitle,
  searchManyTitles,
} = require('../../controllers/notice');

router.delete('/:id', authenticate, deleteNoticeById);
router.get('/paginateNotice', paginateNotice);
router.get('/searchOneTitle', searchOneTitle);
router.get('/searchManyTitles', searchManyTitles);

module.exports = router;
