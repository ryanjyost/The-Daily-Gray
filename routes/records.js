const express = require("express");
const router = express.Router();
const Record = require("../models/record.js");
const Batch = require("../models/batch.js");

router.get("/", (req, res) => {
  //res.writeHead(200, { "Access-Control-Allow-Origin": "*" });

  const params = {};
  Record.find(params, (err, records) => {
    res.status(200).send({ records });
  });
});

router.get("/batch/:batchId", (req, res) => {
  //res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  Batch.findOne({}, {}, { sort: { created_at: -1 } }, function(err, batch) {
    const params = { batch: Number(batch.id) };
    Record.find(params, (err, records) => {
      res.status(200).send({ records });
    });
  });
});

module.exports = router;
