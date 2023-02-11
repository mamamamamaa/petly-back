const express = require('express');
const ctrl = require("../../controllers/userProfile");
const {authenticate} = require('../../middlewares');
const upload = require("../../utils/multer");

const router = express.Router();

// router.use(authenticate);

router.get('/', authenticate, ctrl.getUserProfile);

router.post('/', authenticate, upload.single('pictureURL'), ctrl.addOwnPet);

router.delete('/:ownPetId', authenticate, ctrl.deleteOwnPet);

module.exports = router;