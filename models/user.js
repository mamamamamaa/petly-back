const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    mobilePhone: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
    },
    avatarURL: {
      type: String,
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
    favorite: [
      {
        type: Schema.Types.ObjectId,
        ref: 'notice',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.post('save', handleMongooseError);

const User = model('user', userSchema);

module.exports = {
  User,
};
