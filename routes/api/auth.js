const express = require("express");

const ctrl = require("../../controllers/auth");

const { validationBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const upload = require("../../utils/multer");

const router = express.Router();

router.post("/signup", validationBody(schemas.joiSignupSchema), ctrl.register);

router.post("/login", validationBody(schemas.joiLoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.get("/logout", authenticate, ctrl.logout);

router.put("/update", validationBody(schemas.joiUpdateUserSchema), authenticate,  ctrl.updateUser);

router.patch("/avatar", authenticate, upload.single('avatarURL'), ctrl.updateAvatar);

module.exports = router;
