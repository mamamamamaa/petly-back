const { ctrlWrapper } = require("../helpers");
const { LostFound } = require("../models/lostFound");

const lostFoundAll = async (req, res) => {
  const result = await LostFound.find();
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      status: "error",
      message: `Not found lost/found`,
    });
  }
};

module.exports = { lostFoundAll: ctrlWrapper(lostFoundAll) };
