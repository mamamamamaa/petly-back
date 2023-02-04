const express = require('express');
const ctrl = require("../../controllers/userProfile");
const {authenticate} = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.getUserProfile);

router.post('/', ctrl.addOwnPet);

router.delete('/:ownPetId', ctrl.deleteOwnPet);

module.exports = router;