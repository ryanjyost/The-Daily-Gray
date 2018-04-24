const express = require("express");
const router = express.Router();
const Screenshot = require("../models/screenshot.js");

router.get("/", (req, res) => {
  const params = {};
  Screenshot.find(params, (err, screenshots) => {
    res.json({ screenshots });
  });
});

module.exports = router;
