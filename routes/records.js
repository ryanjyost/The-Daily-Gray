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

router.get("/get_recent", (req, res) => {
  //res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  Batch.findOne(
    { "records.1": { $exists: true } }, //make sure there's records in the batch
    {},
    { sort: { created_at: -1 } },
    function(err, batch) {
      const params = { batch: Number(batch.id) };
      Record.find(params, (err, records) => {
        res.status(200).send({ records });
      });
    }
  );
});

router.get("/get_recent_links", (req, res) => {
  //res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
  Batch.findOne(
    { "records.1": { $exists: true } },
    {},
    { sort: { created_at: -1 } },
    function(err, batch) {
      const params = { batch: Number(batch.id) };
      Record.find(params, (err, records) => {
        let hash = {};
        res.status(200).send({ records, batch });
      });
    }
  );
});

module.exports = router;
