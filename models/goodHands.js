const mongoose = require("mongoose");
const HandsSchema = new mongoose.Schema({
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
    dateOfBirth: {
        type: String,
    },
    sex: {
        type: String,
        enum: ["Male", "Female"]
    },
  cloudinary_id: {
    type: String,
  },
});
const Hands = mongoose.model("goodHands", HandsSchema)
module.exports = {Hands};