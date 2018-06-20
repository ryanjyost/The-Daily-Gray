const express = require("express");
const router = express.Router();
const Batch = require("../models/batch.js");

router.get("/", (req, res) => {
  const params = {};
  Batch.find(params, (err, batches) => {
    res.status(200).send({ batches });
  });
});

module.exports = router;
