const { ctrlWrapper } = require("../helpers");
const { Sell } = require("../models/sell");


const sellAll = async (req, res) => {
  const result = await Sell.find();
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      status: "error",
      message: `Not found sell`,
    });
  }
};


module.exports = {sellAll: ctrlWrapper(sellAll) };
