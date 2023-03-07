const OurTeam = require("../../models/ourTeam");
const { HttpError } = require("../../middlewares");

const getTeam = async (req, res, next) => {
  const team = await OurTeam.find().sort("id");

  if (!team) {
    next(HttpError(500, "Something went wrong"));
  }
  res.status(200).json(team);
};

module.exports = getTeam;
