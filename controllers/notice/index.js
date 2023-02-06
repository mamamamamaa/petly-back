const { ctrlWrapper } = require("../../helpers");
const { deleteNoticeById } = require("./deleteNoticeById");
const { deleteFavNotice } = require("./deleteFavNotice");
const { getNoticeById } = require("./getNoticeById");
const { getFavoriteNotices } = require("./getFavoriteNotices");
const { updateNoticeFavorite } = require("./updateNoticeFavorite");
const { searchOneTitle } = require("./searchOneTitle");
const { paginateNotice } = require("./paginateNotice");
const { searchManyTitles } = require("./searchManyTitles");
const { addNotice } = require("./addNotice");

module.exports = {
  deleteFavNotice: ctrlWrapper(deleteFavNotice),
  deleteNoticeById: ctrlWrapper(deleteNoticeById),
  getNoticeById: ctrlWrapper(getNoticeById),
  getFavoriteNotices: ctrlWrapper(getFavoriteNotices),
  updateNoticeFavorite: ctrlWrapper(updateNoticeFavorite),
  searchOneTitle: ctrlWrapper(searchOneTitle),
  paginateNotice: ctrlWrapper(paginateNotice),
  searchManyTitles: ctrlWrapper(searchManyTitles),
  addNotice: ctrlWrapper(addNotice),
};
