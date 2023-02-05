const { deleteNoticeById } = require('./deleteNoticeById');
const { searchOneTitle } = require('./searchOneTitle');
const { paginateNotice } = require('./paginateNotice');
const { searchManyTitles } = require('./searchManyTitles');
const { getNoticeById } = require('./getNoticeById');
const { updateNoticeFavorite } = require('./updateNoticeFavorite');
const { getFavoriteNotices } = require('./getFavoriteNotices');
const { deleteFavNotice } = require('./deleteFavNotice');

module.exports = {
  getNoticeById,
  updateNoticeFavorite,
  getFavoriteNotices,
  deleteFavNotice,
  deleteNoticeById,
  searchOneTitle,
  paginateNotice,
  searchManyTitles,
};
