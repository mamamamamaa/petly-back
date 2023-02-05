const { deleteNoticeById } = require('./deleteNoticeById');
const { searchOneTitle } = require('./searchOneTitle');
const { paginateNotice } = require('./paginateNotice');
const { searchManyTitles } = require('./searchManyTitles');

module.exports = {
  deleteNoticeById,
  searchOneTitle,
  paginateNotice,
  searchManyTitles,
};
