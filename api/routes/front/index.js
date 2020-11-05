const express = require("express");
const router = express.Router();
const db = require('../../datasource/mysql');

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

router.get("/questionAnswered", function (req, res) {
  db.query(
    "SELECT question.titre, question.contenu FROM question JOIN reponse ON question.id = reponse.question_id",
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur");
      } else {
        res.send(results);
      }
    }
  );
});

router.get("/question-answer", function (req, res) {
  db.query(
    "SELECT question.titre, question.contenu, reponse.contenu AS reponse FROM question JOIN reponse ON question.id = reponse.question_id",
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur");
      } else {
        res.json(results);
      }
    }
  );
});

router.post("/ask", function (req,res) {
  const title="${req.body.titre}";
  const contenu="${req.body.contenu}";
  db.query("INSERT INTO question (titre, contenu) VALUES (?)",[[title, contenu]], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send({message: "Erreur"});
    } else if(req.body.titre.length<100 && req.body.contenu.length<300 ){
      res.status(200).send({message: "post confirmed"});
    }
    else{
      res.status(412).send({message: "Mauvais format"});
    }
  })
});

module.exports = router;
