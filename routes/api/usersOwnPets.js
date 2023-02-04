const express = require('express');
const ctrl = require("../../controllers/ownPets");

const router = express.Router();

router.get('/', ctrl.listOwnPets);

router.post('/', ctrl.addOwnPet);

<<<<<<< HEAD
router.delete('/:ownPetId', ctrl.deleteOwnPet);
=======
router.delete('/:ownPetId', ctrl.deleteOwnPet)
>>>>>>> dfe9f6f (.)

module.exports = router;