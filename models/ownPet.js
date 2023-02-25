const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const ownPetSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for your pet'],
    },
    dateOfBirth: String,
    breed: String,
    comments: String,
    pictureURL: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
},
    { versionKey: false }
);

ownPetSchema.post("save", handleMongooseError);

const OwnPet = model("ownpet", ownPetSchema);

module.exports = OwnPet;