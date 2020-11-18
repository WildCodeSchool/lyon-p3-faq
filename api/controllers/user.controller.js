
const UserModel = require("../models/user.model");

class UserController {
  // Actions on one user
  static async updateOne(req, res) {
    try {
      let idUser = req.params.id;

      // On vérifie si l'utilisateur existe en base de données
      const countResult = await UserModel.matchDB(idUser);

      // L'utilisateur a bien été trouvé dans la base de données

      if (countResult[0].count > 0) {
        // On renvoie les informations de l'utilisateur
        const { name, mail, role } = req.body;
        const fields = {
          name: name,
          mail: mail,
          role_id: role,
        };

        const queryResult = await UserModel.one(idUser, req.method, fields);

        res.send("User successfully updated");
      } else {
        res.status(406).send({ "No result for user :": idUser });
      }
    } catch (err) {
      // fin du try

      res.json({ message: err });
    }
  }

  // get One user
  static async getOne(req, res) {
    console.log("getOne");
    try {
      let idUser = req.params.id;

      // On vérifie si l'utilisateur existe en base de données
      const countResult = await UserModel.matchDB(idUser);

      // L'utilisateur a bien été trouvé dans la base de données
      if (countResult[0].count > 0) {
        // On renvoie les informations de l'utilisateur
        const queryResult = await UserModel.one(idUser, req.method);
        res.send(queryResult);
      } else {
        res.status(406).send({ "No result for user :": idUser });
      }
    } catch (err) {
      res.json({ message: err });
    }
  }

  // delete one user
  static async deleteOne(req, res) {
    try {
      let idUser = req.params.id;

      // On vérifie si l'utilisateur existe en base de données
      const countResult = await UserModel.matchDB(idUser);

      // L'utilisateur a bien été trouvé dans la base de données
      if (countResult[0].count > 0) {
        // On renvoie les informations de l'utilisateur

        const queryResult = await UserModel.one(idUser, req.method);
        res.send("User deleted");
      } else {
        res.status(406).send({ "No result for user :": idUser });
      }
    } catch (err) {
      res.json({ message: err });
    }
  }

  // display all users
  static async getUsers(req, res) {
    try {
      const queryResult = await UserModel.getAll();
      res.send(queryResult);
    } catch (err) {
      res.json({ message: err });
    }
  }

  //add a User
  static async addUser(req, res) {
    try {
      const { name, mail, role } = req.body;

      const pass = "faqmdp";
      const ipAdress =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      const fields = [[name, mail, role, pass, ipAdress]];

      const queryResult = await UserModel.addOne(fields);
      res.send("User successfully added");
    } catch (err) {
      res.json({ message: err });
    }
  }

  //login a User
  static async login(req, res) {
    const { login, password } = req.body;

    try {
      if (login === undefined || password === undefined) {
        res.status(400).send("JSON incorrect. Champs attendus : login et mdp");
      } else {
        const queryResult = await UserModel.checkLogin(login, password);

        if (queryResult[0].count !== 0) {
          res.status(200).json("Identifiants ok");
        } else {
          res.status(401).json("Identifiants incorrects");
        }
      }
    } catch (err) {
      res.status(406).json("Identifiants incorrects");
    }
  }
}

module.exports = UserController;
