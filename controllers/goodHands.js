const { ctrlWrapper } = require("../helpers");
const { Hands } = require("../models/goodHands");

//const goodHandAll = await Hands.find();
const goodHandAll = async (req, res) => {
  const result = await Hands.find();
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      status: "error",
      message: `Not found in doog hands`,
    });
  }
};

module.exports = { goodHandAll: ctrlWrapper(goodHandAll) };
