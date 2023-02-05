const mongoose = require("mongoose");
const LostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  photoUrl: {
    type: String,
    },
    name: {
        type: String
    },
   breed: {
    type: String,
    },
   place: {
    type: String,
  },
  dateOfBirth: {
    type: String
  },
   comments: {
        type: String,
        required: true,
    },
  sex:
    { type: String, enum: ["Male", "Female"] },
   
  cloudinary_id: {
    type: String,
  },
});

const LostFound = mongoose.model("lostFound", LostSchema);

module.exports = {LostFound};