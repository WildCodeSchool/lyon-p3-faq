const User = require("../models/user.model");
const logger = require("../library/logger");

class UserController {
  // Actions on one user
  static async updateOne(req, res) {
    try {
      let idUser = req.params.id;

      // On vérifie si l'utilisateur existe en base de données
      const countResult = await User.matchUser(idUser);

      // L'utilisateur a bien été trouvé dans la base de données

      if (countResult[0].count > 0) {
        // On renvoie les informations de l'utilisateur
        const { name, mail, role } = req.body;
        const fields = {
          name: name,
          mail: mail,
          role_id: role,
        };

        const queryResult = await User.update(idUser, fields);
        if (queryResult.affectedRows > 0) {
          res.send({message : "User successfully updated"});
        } else {
          res.status(404).send({ error: "Nothing updated" });
        }
      } else {
        res.status(404).send({ "No result for user :": idUser });
      }
    } catch (err) {
      // fin du try
      logger.error(err);
      res.sendStatus(500);
    }
  }

  // get One user
  static async getOne(req, res) {
    try {
      let idUser = req.params.id;

      // On vérifie si l'utilisateur existe en base de données
      const countResult = await User.matchUser(idUser);
      // L'utilisateur a bien été trouvé dans la base de données
      if (countResult[0].count > 0) {
        
        // On renvoie les informations de l'utilisateur
        const queryResult = await User.read("where id=", idUser);
        res.send(queryResult);
      } else {
        res.status(404).send({ "No result for user :": idUser });
      }
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }

  // delete one user
  static async deleteOne(req, res) {
    try {
      let idUser = req.params.id;

      // On vérifie si l'utilisateur existe en base de données
      const countResult = await User.matchUser(idUser);

      // L'utilisateur a bien été trouvé dans la base de données
      if (countResult[0].count > 0) {
        
        // On renvoie les informations de l'utilisateur

        const queryResult = await User.delete(idUser);
        if (queryResult.affectedRows > 0) {
          res.send({ message : "User successfully deleted"});
        } else {
          res.status(404).send({ error: "Nothing deleted" });
        }

        res.send("User deleted");
      } else {
        res.status(404).send({ "No result for user :": idUser });
      }
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }

  // display all users
  static async getUsers(req, res) {
    try {
      const queryResult = await User.read();

      res.send(queryResult);
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }

  //add a User
  static async addUser(req, res) {
    try {
      const { name, mail, role } = req.body;

      const pass = "faqmdp";
      const ipAdress =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      const fields_table = [[name, mail, pass, ipAdress, role]];

      const queryResult = await User.create(fields_table);
      console.log("add one", queryResult);
      if (queryResult.affectedRows > 0) {
        res.send("User successfully added");
      } else {
        res.status(404).send({ error: "Nothing added" });
      }
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }

  //login a User
  static async login(req, res) {
    const { login, password } = req.body;

    try {
      if (login === undefined || password === undefined) {
        res.status(400).send("JSON incorrect. Champs attendus : login et mdp");
      } else {
        const queryResult = await User.checkLogin(login, password);
        if (queryResult[0].count !== 0) {
          res.status(200).json("Identifiants ok");
        } else {
          res.status(401).json("Identifiants incorrects");
        }
      }
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }
}

module.exports = UserController;
