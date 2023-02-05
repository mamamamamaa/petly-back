const express = require('express');
const getFriends = require('../../controllers/friends/friends');

const router = express.Router();

router.get("/", getFriends);

module.exports = router;