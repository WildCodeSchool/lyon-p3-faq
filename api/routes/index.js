const express = require("express");
const router = express.Router();
const db = require("../confMysql/conf");

router.get("/", function (req, res) {
  res.send("Hello");
});

router.get("/test", function (req, res) {
  db.query("SELECT name FROM user", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur");
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
