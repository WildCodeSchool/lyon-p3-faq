const { Router } = require('express');
const db = require('../../datasource/mysql');
const router = Router();

/* ********************* Routes for users handling ********************* */

/* GET all users. */
router.get('/', (req, res) => {

  db.query('SELECT name,mail,pass,ip_address,role_id FROM user', (err, result) => {

    if (err) {

      res.status(500)
        .send({ error: err });
    } else {
      res.status(200)
        .send(result);
    }

  });

});

/* GET one user */
router.get('/:id', (req, res) => {
  let idUser = req.params.id;

  const regex = new RegExp('^[0-9]+$');

  // On vérifie si l'id saisi est bien un chiffre

  if (!regex[Symbol.match](idUser)) {

    res.status(400)
      .send('Please fill id with a number');

  } else {

    // On vérifie si l'utilisateur existe en base de données
    db.query(' SELECT COUNT(id) as count FROM user WHERE id= ?', idUser, (err, result) => {

      if (err) {
        res.status(500)
          .send({ error: err });
      } else {

// L'utilisateur a bien été trouvé dans la base de données
        if (result[0].count > 0) {

          // On renvoie les informations de l'utilisateur
          db.query('SELECT name,mail,ip_address,role_id FROM user WHERE id= ?', idUser, (err, result) => {

            if (err) {
              
              res.status(500)
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
router.delete('/:id', (req, res) => {

  let idUser = req.params.id;

  db.query('DELETE  FROM user WHERE id= ?', idUser, (err, result) => {

    if (err) {

      res.status(500)
        .send({ error: err });
    } else {
      res.status(200)
        .send('User deleted');
    }

  });

});

/* add one user */

router.post('/', (req, res) => {

  const { name, mail, role } = req.body;

  const pass = 'faqmdp';
  const ipAdress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const fields = [[name, mail, role, pass, ipAdress]];

  db.query('INSERT INTO user (name,mail,role_id,pass,ip_address) VALUES ? ', [fields], (err, result) => {

    if (err) {

      res.status(500)
        .send({ error: err });
    } else {
      res.status(200)
        .send('User added');
    }

  });

});

/* UPDATE one user */

router.put('/:id', (req, res) => {

  let idUser = req.params.id;

  const { name, mail, role } = req.body;
  const fields = {
    name: name,
    mail: mail,
    role_id: role
  };

  db.query('UPDATE user SET ? WHERE id= ?', [fields, idUser], (err, result) => {

    if (err) {

      res.status(500)
        .send({ error: err });
    } else {
      res.status(200)
        .send('User updated');
    }

  });

});

module.exports = router;
