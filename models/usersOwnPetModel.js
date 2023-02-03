const { Schema, model, } = require("mongoose");

const ownPetSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    dateOfBirth: {
        type: Date,
    },
    breed: {
        type: String,
    },
    comments: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
},
    {versionKey: false}
);

const ownPet = model("ownPet", ownPetSchema);

module.exports = {ownPet};

