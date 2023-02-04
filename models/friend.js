const {Schema, model} = require("mongoose");

const friendsSchema = new Schema (  {    
    title: String,
    url: String,
    addressUrl: {
        type: String,
        default: null,
    },
    imageUrl: String,
    address: {
        type: String,
        default: null,
    },
    workDays: {
        type: Array,
        default: null,
    },
    
    phone: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    },
{ versionKey: false, timestamps: true }
);

const Friend = model("friends", friendsSchema);

module.exports = Friend;