const { Router } = require('express');
const db = require('../../datasource/mysql');
const router = Router();

/* ********************* Routes for users handling ********************* */

/* GET all users. */
router.get('/users/all', (req, res) => {

  db.query('SELECT * FROM user', (err, result) => {

    if (err) {

      res.status(400)
        .send({ error: err });
    } else {
      res.status(200)
        .send(result);
    }

  });

});

/* GET one user */
router.get('/users/:id', (req, res) => {
  let idUser = req.params.id;

  const regex = new RegExp('^[0-9]+$');

  // On vérifie si l'id saisi est bien un chiffre

  if (!regex[Symbol.match](idUser)) {

    res.status(406)
      .send('Please fill id with a number');

  } else {

    // On vérifie si l'utilisateur existe en base de données
    db.query(' SELECT COUNT(id) as count FROM user WHERE id= ?', idUser, (err, result) => {

      if (err) {
        res.status(400)
          .send({ error: err });
      } else {



// L'utilisateur a bien été trouvé dans la base de données
        if (result[0].count > 0) {

          // On renvoie les informations de l'utilisateur
          db.query('SELECT name,mail,ip_adress,role_id FROM user WHERE id= ?', idUser, (err, result) => {

            if (err) {
              ;
              res.status(400)
                .send({ error: err });
            } else {
              res.status(200)
                .send(result);
            }

          });

        } else {

          res.status(406)
            .send({ 'No result for user :': idUser });
        }
      }

    });

  } // end of regex

});

/* delete one user */
router.delete('/users/:id', (req, res) => {

  db.query('DELETE  FROM user WHERE id= ?', idUser, (err, result) => {

    if (err) {

      res.status(400)
        .send({ error: err });
    } else {
      res.status(200)
        .send('User deleted');
    }

  });

});

/* add one user */

router.post('/users/add', (req, res) => {

  const { name, mail, role } = req.body;

  const pass = 'faqmdp';
  const ip_adress = '127.0.0.1';
  const fields = [[name, mail, role, pass, ip_adress]];

  db.query('INSERT INTO user (name,mail,role_id,pass,ip_adress) VALUES ? ', [fields], (err, result) => {

    if (err) {

      res.status(400)
        .send({ error: err });
    } else {
      res.status(200)
        .send('User added');
    }

  });

});

/* UPDATE one user */

router.put('/users/update/:id', (req, res) => {

  let idUser = req.params.id;

  const { name, mail, role } = req.body;
  const fields = {
    name: name,
    mail: mail,
    role_id: role
  };

  db.query('UPDATE user SET ? WHERE id= ?', [fields, idUser], (err, result) => {

    if (err) {

      res.status(400)
        .send({ error: err });
    } else {
      res.status(200)
        .send('User updated');
    }

  });

});

/* ********************* Routes for Posts handling ********************* */

/* Add a response */

router.post('/post/addresponse', (req, res) => {

  const { question_id, contenu, created_by } = req.body;

console.log("req body :",req.body)
  const fields = [[question_id, contenu, created_by]];

  db.query('INSERT INTO reponse (question_id,contenu,created_by) VALUES ? ', [fields], (err, result) => {

    if (err) {

      res.status(400)
        .send({ error: err });
    } else {
      res.status(200)
        .send('User added');
    }

  });

});




/* Archive a  post  */

router.put('/post/archivepost/:id', (req, res) => {

  let idQuestion = req.params.id;

  const fields = {
    disabled_by: 3,
    disabled_at: new Date()

  };




  db.query('UPDATE question SET ? WHERE id= ?', [fields, idQuestion], (err, result) => {

    if (err) {

      res.status(400)
        .send({ error: err });
    } else {
      res.status(200)
        .send('reponse disabled');
    }

  });

});



module.exports = router;
