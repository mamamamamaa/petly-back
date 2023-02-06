const { model, Schema } = require("mongoose");

const noticeSchema = new Schema(
  {
    title: { type: String, required: true },
    photoUrl: { type: String },
    breed: { type: String },
    place: { type: String },
    dateOfBirth: { type: Date },
    name: { type: String },
    sex: { type: String, enum: ["Male", "Female"] },
    type: { type: String, enum: ["lost/found", "good-hands", "sell"] },
    price: { type: Number },
    comments: { type: String, required: true },
    favorite: [String],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model("notice", noticeSchema);

module.exports = { Notice };
