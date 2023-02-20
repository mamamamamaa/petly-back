const { ctrlWrapper } = require("../../helpers");
const { deleteNoticeById } = require("./deleteNoticeById");
const { deleteFavNotice } = require("./deleteFavNotice");
const { getNoticeById } = require("./getNoticeById");
const { getFavoriteNotices } = require("./getFavoriteNotices");
const { addNoticeFavorite } = require("./addNoticeFavorite");
const { delNoticeFavorite } = require("./delNoticeFavorite");
const { paginateNotice } = require("./paginateNotice");
const { searchNotice } = require("./searchNotice");
const { addNotice } = require("./addNotice");
const { getOnlyUserNotice } = require("./getOnlyUserNotice");

module.exports = {
  deleteFavNotice: ctrlWrapper(deleteFavNotice),
  deleteNoticeById: ctrlWrapper(deleteNoticeById),
  getNoticeById: ctrlWrapper(getNoticeById),
  getFavoriteNotices: ctrlWrapper(getFavoriteNotices),
  addNoticeFavorite: ctrlWrapper(addNoticeFavorite),
  delNoticeFavorite: ctrlWrapper(delNoticeFavorite),
  paginateNotice: ctrlWrapper(paginateNotice),
  searchNotice: ctrlWrapper(searchNotice),
  addNotice: ctrlWrapper(addNotice),
  getOnlyUserNotice: ctrlWrapper(getOnlyUserNotice),
};
