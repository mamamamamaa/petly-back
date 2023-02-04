const express = require('express');
const ctrl = require("../../controllers/userProfile");
const {authenticate, upload} = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.getUserProfile);

router.post('/', upload.single('pictureURL'), ctrl.addOwnPet);

router.delete('/:ownPetId', ctrl.deleteOwnPet);

module.exports = router;