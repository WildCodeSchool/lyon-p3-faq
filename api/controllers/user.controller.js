<<<<<<< HEAD
const User = require("../models/user.model");
const Role = require("../models/role.model")
const logger = require("../library/logger");
=======
const db = require("../datasource/mysql");
const UserModel = require("../models/user.model");
>>>>>>> fixing issues by MM

class UserController {
  // Actions on one user
  static async updateOne(req, res) {
    try {
      let idUser = req.params.id;

      // On vérifie si l'utilisateur existe en base de données
<<<<<<< HEAD
      const countResult = await User.matchUser(idUser);
=======
      const countResult = await UserModel.matchDB(idUser);
>>>>>>> fixing issues by MM

      // L'utilisateur a bien été trouvé dans la base de données

      if (countResult[0].count > 0) {
        // On renvoie les informations de l'utilisateur
<<<<<<< HEAD
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
=======

        if (req.method === "DELETE") {
          const queryResult = await UserModel.one(idUser, req.method);
          res.send("User deleted");
>>>>>>> fixing issues by MM
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

<<<<<<< HEAD
  // get One user
  static async getOne(req, res) {
    try {
      let idUser = req.params.id;
=======
        if (req.method == "GET") {
          const queryResult = await UserModel.one(idUser, req.method);
          res.send(queryResult);
        }
>>>>>>> fixing issues by MM

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

<<<<<<< HEAD
  // delete one user
  static async deleteOne(req, res) {
    try {
      let idUser = req.params.id;
=======
          const queryResult = await UserModel.one(idUser, req.method, fields);
>>>>>>> fixing issues by MM

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
    const {withRoles}= req.query
    console.log("withRoles : ", withRoles)
    console.log("req.body :",req.query)
    try {
<<<<<<< HEAD
      if (withRoles == undefined) {
        console.log("CAS CLASSIC")
      const queryResult = await User.read();
      res.send(queryResult);
    } else {

      console.log("CAS WITH ROLES")
      const queryResult = await User.getUserWithRoles();
=======
      const queryResult = await UserModel.getAll();
>>>>>>> fixing issues by MM
      res.send(queryResult);
    }
      
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }

  //add a User
  static async addUser(req, res) {
    try {
      const { name, mail, role, id } = req.body;

      const pass = "faqmdp";
      const ipAdress =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      const fields_table = [[name, mail, pass, ipAdress, role, id]];

<<<<<<< HEAD
      const queryResult = await User.create(fields_table);
      console.log("add one", queryResult);
      if (queryResult.affectedRows > 0) {
        res.send("User successfully added");
      } else {
        res.status(404).send({ error: "Nothing added" });
      }
=======
      const queryResult = await UserModel.addOne(fields);
      res.send("User successfully added");
>>>>>>> fixing issues by MM
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
<<<<<<< HEAD
        const queryResult = await User.checkLogin(login, password);
=======
        const queryResult = await UserModel.checkLogin(login, password);

>>>>>>> fixing issues by MM
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


  //get Roles
  static async getRoles(req, res) {
    

    try {
      
        const queryResult = await Role.read();
               
          res.status(200).json(queryResult);
        
      
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }
}

module.exports = UserController;
