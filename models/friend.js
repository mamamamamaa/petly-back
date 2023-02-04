const {Schema, model} = require("mongoose");

const friendsSchema = new Schema (  
    {
    title: String,
    url: String,
    addressUrl: String,
    imageUrl: String,
    address: String,
    // workDays: 
    // phone:, 
    // email:,
    },
{ versionKey: false, timestamps: true }
);

const Friend = model("friends", friendsSchema);

module.exports = Friend;