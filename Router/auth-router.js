const express = require("express");
const router = express.Router();
const authcontroller = require("../Controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome to Series by router");
// });

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema), authcontroller.register);
router.route("/login").post(authcontroller.login);

module.exports = router; 