const route = require('express').Router();
const authenticate = require('../../middlewares/authenticate');
const {
  getNoticeById,
  updateNoticeFavorite,
  deleteNoticeById,
} = require('../controllers/notice');

route.get('/:noticeId', authenticate, getNoticeById);
route.patch('/:noticeId/favorite', authenticate, updateNoticeFavorite);
route.delete('/:id', authenticate, deleteNoticeById);
