const { Router } = require('express');
const db = require('../../datasource/mysql');
const router = Router();

/* ********************* Routes for login ********************* */

/* Route POST */
router.post('/', (req, res) => {

  const { login, password } = req.body;

  // We test if we have a result for this tuple of login/password
  db.query('SELECT count(id) as count FROM user WHERE mail=? AND pass=?', [login, password], (err, result) => {

    if (err) {

      res.status(400)
        .send({ error: err });
    } else {

      if (result[0].count > 0) {
        res.status(200)
          .json('Identifiants ok');

      } else {

        res.status(403)
          .json('Identifiants incorrects');

      }
    }

  });

});

module.exports = router;
