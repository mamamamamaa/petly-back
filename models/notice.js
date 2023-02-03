const { model, Schema } = require("mongoose");

const noticeSchema = new Schema(
  {
    photoUrl: { type: String },
    breed: { type: String },
    place: { type: String },
    dateOfBirth: { type: Date },
    name: { type: String },
    sex: { type: String, enum: ["Male", "Female"], default: "Male" },
    type: { type: String, enum: ["lost/found", "good-hands", "sell"] },
    sell: { type: String || null },
    favorite: { type: Boolean, default: false },
    comments: { type: String },
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
