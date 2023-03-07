const { model, Schema } = require('mongoose');

const noticeSchema = new Schema(
  {
    title: { type: String, required: true },
    photoUrl: { type: Array },
    breed: { type: String },
    place: { type: String },
    dateOfBirth: { type: String },
    name: { type: String },
    sex: { type: String, enum: ['male', 'female'] },
    type: { type: String, enum: ['lost/found', 'good-hands', 'sell'] },
    price: { type: Number },
    comments: { type: String },
    email: { type: String },
    mobilePhone: { type: String },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    cloudinary_id: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
);

const Notice = model('notice', noticeSchema);

module.exports = { Notice };
