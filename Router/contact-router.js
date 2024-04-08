const express = require("express");
const router = express.Router();
const contactForm = require("../Controllers/contact-controller"); 

// router.get("/", (req, res) => {
//     res.status(200).send("Welcome to Series by router");
// });

router.route("/contact").post(contactForm);


module.exports = router; 