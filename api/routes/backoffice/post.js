const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();

/* ********************* Routes for Posts handling ********************* */

/* Add a response */

router.post("/addresponse", (req, res) => {
  const { question_id, contenu, created_by } = req.body;

  const fields = [[question_id, contenu, created_by]];

  db.query(
    "INSERT INTO reponse (question_id,contenu,created_by) VALUES ? ",
    [fields],
    (err, result) => {
      if (err) {
        res.status(500).send({ error: err });
      } else {
        res.status(201).send("Reponse successfully added");
      }
    }
  );
});

/* Update route  */

router.put("/:id", (req, res) => {
  let idQuestion = req.params.id;
  const { idUser, action } = req.body;

  if (idUser === undefined || action === undefined) {
    return res
      .status(400)
      .send("JSON incorrect. Champs attendus : idUser et action");
  }

    let fields = {};
    if (action === "publish") {
        fields = {
            publicated_by: idUser,
            publicated_at: new Date(),
        };
    } else if (action === "archive") {
        fields = {
            disabled_by: idUser,
            disabled_at: new Date(),
        };
    } else {
        return res.status(400).send("Please type a valid action : publish or archive");
    }
    db.query(
        "UPDATE question SET ? WHERE id= ?",
        [fields, idQuestion],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: err });
            } else {
                // We disable associated answers
                if (action === "archive") {
                    db.query(
                        "UPDATE reponse SET ? WHERE question_id= ?",
                        [fields, idQuestion],
                        (err, result) => {

                         
                            if (err) {
                                res.status(500).send({error: err});
                            } else {
                                res.status(200).write('question disabled');
                                if (result.affectedRows === 0) {
                                    res.end();
                                } else {
                                    res.end(' and response disabled')
                                }
                            }
                        }
                    );
                } else {
                    res.send("Question published");
                }
            }
        }
    );
});


// Display all questions & answers (including questions without answers)
router.get("/", (req, res) => {
  db.query(
    "SELECT q.titre,q.contenu as contenu_question,q.created_by,q.created_at, reponse.contenu as contenu_reponse from question as q  LEFT JOIN reponse ON q.id=reponse.question_id",
    (err, result) => {
      if (err) {
        res.status(500).send({ error: err });
      } else {
        res.status(200).json(result);
      }
    }
  );
});

module.exports = router;
