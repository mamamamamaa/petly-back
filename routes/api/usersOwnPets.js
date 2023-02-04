const express = require('express');
const ctrl = require("../../controllers/ownPets");

const router = express.Router();

router.get('/', ctrl.listOwnPets);

router.post('/', ctrl.addOwnPet);

router.delete('/:ownPetId', ctrl.deleteOwnPet);

module.exports = router;