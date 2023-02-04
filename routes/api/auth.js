const express = require("express");

const { auth: ctrl } = require("../../controllers");

const { validationBody, auther } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/signup", validationBody(schemas.joiSignupSchema), ctrl.signup);

router.post("/login", validationBody(schemas.joiLoginSchema), ctrl.login);

router.get("/current", auther, ctrl.getCurrent);

router.get("/logout", auther, ctrl.logout);

module.exports = router;