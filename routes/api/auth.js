const express = require("express");
const ctrl = require("../../controllers/auth");
const { validationBody, authenticate, passport } = require("../../middlewares");
const { schemas } = require("../../schemas/user");
const upload = require("../../utils/multer");

const router = express.Router();

router.post("/signup", validationBody(schemas.joiSignupSchema), ctrl.register);
router.get("/google", passport.authenticate("google", {
  scope: ["email", "profile"]
}))
router.get("/google/callback", passport.authenticate("google", { session: false }), ctrl.googleAuth)
router.post("/login", validationBody(schemas.joiLoginSchema), ctrl.login);
router.post("/token", validationBody(schemas.joiRefreshTokenSchema), ctrl.refresh);
router.get("/current", authenticate, ctrl.getCurrent);
router.get("/logout", authenticate, ctrl.logout);
router.put("/update", validationBody(schemas.joiUpdateUserSchema), authenticate, ctrl.updateUser);
router.patch("/avatar", authenticate, upload.single("avatarURL"), ctrl.updateAvatar);
router.get("/verify/:verificationToken", ctrl.verify);
router.post("/verify", ctrl.reverify);

module.exports = router;
