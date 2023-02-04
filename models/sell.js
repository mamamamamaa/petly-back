const mongoose = require("mongoose");
const SellSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  photoUrl: {
    type: String,
    },
   breed: {
    type: String,
    },
   place: {
    type: String,
    },
   price: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});
const Sell = mongoose.model("sell", SellSchema)
module.exports = {Sell};