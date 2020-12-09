const User = require("../models/user.model");
const Role = require("../models/role.model");
const logger = require("../library/logger");
const mailer = require("../library/mailer");
const { createToken, verifyToken } = require("../services/jwt");
const jwt = require("jsonwebtoken");
const { mailOptions } = require("../datasource/mails");
const { checkupdatePassword } = require("../middleware/validator");

class UserController {
  // Actions on one user
  static async updateOne(req, res) {
    const { mail } = req.body.mail;

    try {
      let idUser = req.params.id;

      // On vérifie si l'utilisateur existe en base de données
     // const countResult = await User.matchUser("id", idUser);

      // L'utilisateur a bien été trouvé dans la base de données

      const { name, mail, role } = req.body;
      const fields = {
        name: name,
        mail: mail,
        role_id: role,
      };

      const queryResult = await User.update(idUser, fields);
      if (queryResult.affectedRows > 0) {
        res.send({ message: "User successfully updated" });
      } else {
        logger.error({
          error: "Nothing updated",
          message: ` No result for user ${idUser}`,
        });
        res.status(404).send({
          error: "Nothing updated",
          message: ` No result for user ${idUser}`,
        });
      }
    } catch (err) {
      // fin du try
      logger.error(err);
      res.sendStatus(500);
    }
  }

  // get One user
  static async getOne(req, res) {
    const token = req.headers.authentication;

    try {
      let idUser = req.params.id;

      const queryResult = await User.read("where id=", idUser);

      if (queryResult.length > 0) {
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

      // On renvoie les informations de l'utilisateur

      const queryResult = await User.delete(idUser);
      if (queryResult.affectedRows > 0) {
        res.send({ message: "User successfully deleted" });
      } else {
        res.status(404).send({
          error: "Nothing deleted",
          message: `No result for user : ${idUser}`,
        });
      }
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }

  // display all users
  static async getUsers(req, res) {
    const { withRoles } = req.query;

    try {
      if (withRoles == undefined) {
        const queryResult = await User.read();
        res.send(queryResult);
      } else {
        const queryResult = await User.getUserWithRoles();
        res.send(queryResult);
      }
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }

  //add a User
  static async addUser(req, res) {
    const { name, mail, role, id } = req.body;

    try {
      const pass = "faqosmdp";
      const ipAdress =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      const fields_table = [[name, mail, pass, ipAdress, role, id]];

      const queryResult = await User.create(fields_table);

      if (queryResult.affectedRows > 0) {
        // send mail with defined transport object

        mailer(mailOptions.newUser(mail, name));

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
    const { login, password, action } = req.body;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

   
      try {
        if (login === undefined || password === undefined) {
          res
            .status(400)
            .send("JSON incorrect. Champs attendus : login et mdp");
        } else {
          const queryResult = await User.checkLogin(login, password);
          if (queryResult[0].count !== 0) {
            const usersInfos = await User.getInfosUser(login, password);
            const token = await createToken(usersInfos[0], ip);

            res.status(200).send({ userInfos: usersInfos[0], token: token });
          } else {
            res.status(401).json("Identifiants incorrects");
          }
        }
      } catch (err) {
        logger.error(err);

        res.sendStatus(500);
      }
    
  }


 //get email for create new password
 static async passwordRenew(req, res) {
 
  const {mail} = req.body

  try {
    // On vérifie si l'utilisateur existe en base de données
    const countResult = await User.matchUser("mail", mail);
console.log("Count Result : ",countResult)

if (countResult[0].count > 0) {
    

    
    mailer(mailOptions.renewPassword(mail));
    res.sendStatus(200);
 

} else {

  res.status(404).send({message:"No account found"})
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

  static async updatePassword(req, res) {
    const { mail, password } = req.body;
    try {
      // On vérifie si l'utilisateur existe en base de données
      const countResult = await User.matchUser("mail", mail);

      // L'utilisateur a bien été trouvé dans la base de données

      if (countResult[0].count > 0) {
        // On renvoie les informations de l'utilisateur

        const fields = {
          pass: password,
        };

        const queryResult = await User.updatePwd(mail, fields);
        if (queryResult.affectedRows > 0) {
          res.status(200).send({ message: "Password successfully updated" });
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
}

module.exports = UserController;
