const { ctrlWrapper } = require("../../helpers");
const { deleteNoticeById } = require("./deleteNoticeById");
const { deleteFavNotice } = require("./deleteFavNotice");
const { getNoticeById } = require("./getNoticeById");
const { getFavoriteNotices } = require("./getFavoriteNotices");
const {
  addNoticeFavorite,
  delNoticeFavorite,
} = require("./updateNoticeFavorite");
const { searchOneTitle } = require("./searchOneTitle");
const { paginateNotice } = require("./paginateNotice");
const { searchManyTitles } = require("./searchManyTitles");
const { addNotice } = require("./addNotice");
const { getOnlyYourNotice } = require("./getOnlyYourNotice");

module.exports = {
  deleteFavNotice: ctrlWrapper(deleteFavNotice),
  deleteNoticeById: ctrlWrapper(deleteNoticeById),
  getNoticeById: ctrlWrapper(getNoticeById),
  getFavoriteNotices: ctrlWrapper(getFavoriteNotices),
  addNoticeFavorite: ctrlWrapper(addNoticeFavorite),
  delNoticeFavorite: ctrlWrapper(delNoticeFavorite),
  searchOneTitle: ctrlWrapper(searchOneTitle),
  paginateNotice: ctrlWrapper(paginateNotice),
  searchManyTitles: ctrlWrapper(searchManyTitles),
  addNotice: ctrlWrapper(addNotice),
  getOnlyYourNotice: ctrlWrapper(getOnlyYourNotice),
};
