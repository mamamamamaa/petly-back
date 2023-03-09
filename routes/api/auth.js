const express = require("express");
const ctrl = require("../../controllers/auth");
const { validationBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../schemas/user");
const upload = require("../../utils/multer");
const router = express.Router();

router.post("/signup", validationBody(schemas.joiSignupSchema), ctrl.register);
router.post("/login", validationBody(schemas.joiLoginSchema), ctrl.login);
router.post(
  "/token",
  validationBody(schemas.joiRefreshTokenSchema),
  ctrl.refresh
);
router.get("/current", authenticate, ctrl.getCurrent);
router.get("/logout", authenticate, ctrl.logout);
router.put(
  "/update",
  validationBody(schemas.joiUpdateUserSchema),
  authenticate,
  ctrl.updateUser
);
router.patch(
  "/avatar",
  authenticate,
  upload.single("avatarURL"),
  ctrl.updateAvatar
);
router.get("/verify/:verificationToken", ctrl.verify);
router.post("/verify", ctrl.reverify);

router.get('/google', ctrl.googleAuth);
router.get('/google-redirect', ctrl.googleRedirect);

module.exports = router;
