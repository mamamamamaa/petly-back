const express = require('express');
const ctrl = require("../../controllers/UsersOwnPet");

const router = express.Router();

router.get('/', ctrl.listOwnPets);

router.post('/', ctrl.addOwnPet);

module.exports = router;