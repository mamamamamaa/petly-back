const Notice = require("../../models/notice");
const { ctrlWrapper } = require("../helpers");

const getOnlyYourNotice = async (req, res) => {
console.dir(req);
const { _id: owner } = req.user;
const { page = 1, limit = 10 } = req.query;
const skip = (page - 1) * limit;
const contacts = await Notice.find(
{ owner },
{},
{
skip,
limit,
}
).populate("owner", "_id email");
res.status(200).json({ contacts, status: "succsess" });
};

module.exports = { getOnlyYourNotice: ctrlWrapper(getOnlyYourNotice) };
