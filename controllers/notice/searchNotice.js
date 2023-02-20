const { Notice } = require("../../models/notice");
const { HttpError } = require("../../middlewares");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const mongoose = require("mongoose");
const { ACCESS_TOKEN_SECRET_KEY } = process.env;

const searchNotice = async (req, res, next) => {
  const { type, title = null } = req.query;
  if (type !== "favorite" && type !== "my-ads") {
    const result = await Notice.find({
      type,
      title: { $regex: title, $options: "gi" },
    }).exec();
    if (!result) {
      throw HttpError(404);
    }
    res.status(200).json(result);
    return;
  }

  const { authorization = "" } = req.headers;
  const [bearer, accessToken] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401));
    return;
  }
  const { id } = jwt.verify(accessToken, ACCESS_TOKEN_SECRET_KEY);
  const user = await User.findById(id);
  if (!user || !user.accessToken || accessToken !== String(user.accessToken)) {
    next(HttpError(401));
    return;
  }
  const { favorite, _id } = user;
  if (type === "favorite") {
    const result = await Notice.find({
      title: { $regex: title, $options: "gi" },
      _id: { $in: favorite.map((notice) => mongoose.Types.ObjectId(notice)) },
    }).exec();
    res.status(200).json(result);
    return;
  }
  if (type === "my-ads") {
    const result = await Notice.find({
      owner: _id,
      title: { $regex: title, $options: "gi" },
    }).exec();
    res.status(200).json(result);
    return;
  }
  res.status(400);
};

module.exports = { searchNotice };
