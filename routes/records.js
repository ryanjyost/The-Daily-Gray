const express = require("express");
const router = express.Router();
const Record = require("../models/record.js");

router.get("/", (req, res) => {
  //res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  console.log(req);

  const params = {};
  Record.find(params, (err, records) => {
    res.status(200).send({ records });
  });
});

router.get("/batch/:batchId", (req, res) => {
  //res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  console.log(req.params);

  const params = { batch: Number(req.params.batchId) };
  Record.find(params, (err, records) => {
    res.status(200).send({ records });
  });
});

module.exports = router;
