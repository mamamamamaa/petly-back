const { Schema, model } = require("mongoose");

const ourTeamSchema = new Schema(
  {
    id: String,
    photo: String,
    name: String,
    role: String,
    mail: String,
    telegram: String,
    linkedin: String,
    github: String,
  },
  { versionKey: false, timestamps: true }
);

const OurTeam = model("ourTeam", ourTeamSchema);

module.exports = OurTeam;
