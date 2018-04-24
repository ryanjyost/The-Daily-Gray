const express = require("express"),
  router = express.Router(),
  webshot = require("webshot");

//============================
//Main Routes
router.use("/api", require("./api"));
router.use("/admin", require("./admin"));
router.use("/auth", require("./auth"));
router.use("/users", require("./users"));
router.use("/screenshots", require("./screenshots"));

// router.get("/sites", (req, res) => {
//   webshot("cnn.com", "/screenshots/cnn.png", err => {
//     res.json({ testing: 123 });
//   });
// });

//=================================
//homepage
router.route("/").get((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//=================================
//Privacy Policy
router.route("/privacy-policy").get((req, res) => {
  res.render("pages/privacyPolicy");
});

//=================================
//Terms of Use
router.route("/terms-of-use").get((req, res) => {
  res.render("pages/termsOfUse");
});

//=================================
//Contact Us
router.route("/contact-us").get((req, res) => {
  res.render("pages/contactUs");
});

//=================================
//How It Works
router.route("/how-it-works").get((req, res) => {
  res.render("pages/howItWorks");
});

//=================================
//How the Chrome Extension Works
router.route("/how-the-chrome-extension-works").get((req, res) => {
  res.render("pages/howExtensionWorks");
});

module.exports = router;
