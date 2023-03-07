const express = require("express");
const { getFriends, getTeam } = require("../../controllers/friends");

const router = express.Router();

router.get("/", getFriends);
router.get("/team", getTeam);

module.exports = router;
