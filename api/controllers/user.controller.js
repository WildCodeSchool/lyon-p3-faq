const db = require("../datasource/mysql");
const userModel = require("../models/user.model");
class UserController {
  static async Users(req, res, action, method) {
    try {
      if (action === "all") {
        const queryResult = await userModel.getAll(method);
        res.send(queryResult);
      }

      if (action === "one") {
        let idUser = req.params.id;
        const regex = new RegExp("^[0-9]+$");

        // On vérifie si l'id saisi est bien un chiffre

        if (!regex[Symbol.match](idUser)) {
          res.status(400).send("Please fill id with a number");
        } else {
          // On vérifie si l'utilisateur existe en base de données
          const countResult = await userModel.match(idUser);

          // L'utilisateur a bien été trouvé dans la base de données
          if (countResult[0].count > 0) {
            // On renvoie les informations de l'utilisateur

            if (method === "delete") {
              const queryResult = await userModel.one(idUser, method);
              res.send("User deleted");
            }

            if (method === "get") {
              const queryResult = await userModel.one(idUser, method);
              res.send(queryResult);
            }

            if (method === "put") {
              const { name, mail, role } = req.body;
              const fields = {
                name: name,
                mail: mail,
                role_id: role,
              };

              const queryResult = await userModel.one(idUser, method, fields);
              // res.write(queryResult);
              // res.end("User successfully updated")
              res.send("User successfully updated");
            }
          } else {
            res.status(406).send({ "No result for user :": idUser });
          }
        }
      }
    } catch (err) {
      // fin du try

      res.json({ message: err });
    }
  }

  static async addUser(req, res) {
    try {
      const { name, mail, role } = req.body;

      const pass = "faqmdp";
      const ipAdress =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      const fields = [[name, mail, role, pass, ipAdress]];

      const queryResult = await userModel.addOne(fields);
      res.send("User successfully added");
    } catch (err) {
      res.json({ message: err });
    }
  }
}

module.exports = UserController;
