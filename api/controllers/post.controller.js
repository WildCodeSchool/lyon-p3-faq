<<<<<<< HEAD
const Post = require("../models/post.model");
const validator = require("../middleware/validator");
const logger = require("../library/logger");
const { Console } = require("winston/lib/winston/transports");
class PostController {
  static async update(req, res) {
    try {
      if (req.body.action === "update") {
        validator.checkResponse;

        PostController.updatePost(req, res);
      } else {
        validator.checkIdUser;
        PostController.updatePostStatus(req, res);
      }
    } catch (err) {
      // fin du try

      logger.error(err);
      res.sendStatus(500);
    }
  }

  // Archive or Publish a post
=======
const PostModel = require("../models/post.model");
class PostController {



>>>>>>> fixing issues by MM
  static async updatePostStatus(req, res) {
    try {
      let idQuestion = req.params.id;
      const { idUser, action } = req.body;

<<<<<<< HEAD
=======
     

>>>>>>> fixing issues by MM
      let fields = {};
      if (action === "publish") {
        fields = {
          publicated_by: idUser,
          publicated_at: new Date(),
          disabled_by: null,
          disabled_at: null,
        };

<<<<<<< HEAD
        const queryResult = await Post.update(idQuestion, fields);
=======
        const queryResult = await PostModel.publishPost(fields, idQuestion);
>>>>>>> fixing issues by MM
        res.send("post published");
      } else if (action === "archive") {
        fields = {
          disabled_by: idUser,
          disabled_at: new Date(),
          publicated_by: null,
          publicated_at: null,
        };

<<<<<<< HEAD
        const queryResult = await Post.update(idQuestion, fields);
        res.send({ message: "post archived" });
=======
        const queryResult = await PostModel.archivePost(fields, idQuestion);
        res.send("post archived");
>>>>>>> fixing issues by MM
      } else {
        return res
          .status(400)
          .send({ message: "Please type a valid action : publish or archive" });
      }
    } catch (err) {
      // fin du try

      logger.error(err);
      res.sendStatus(500);
    }
  }

  static async updatePost(req, res) {
    try {
      let idQuestion = req.params.id;
      const { titre_question, contenu_question, contenu_reponse } = req.body;

      const fields = {
        titre: titre_question,
        "question.contenu": contenu_question,
        "reponse.contenu": contenu_reponse,
      };

      const queryResult = await Post.updatePost(idQuestion, fields);

      if (queryResult.affectedRows > 0) {
        res.send({ message: "Post successfully updated" });
      } else {
        res.status(404).send({ error: "Nothing updated" });
      }
    } catch (err) {
      // fin du try

      logger.error(err);
      res.sendStatus(500);
    }
  }

  static async addResponse(req, res) {
    console.log("controller addResponse");
    try {
      const { question_id, contenu } = req.body;
      const created_by = "2";
      const created_at = new Date();

      const fields = [[question_id, contenu, created_by, created_at]];

      const queryResult = await Post.addResponse(fields);

      if (queryResult.affectedRows > 0) {
        res.send({ message: "Reponse successfully added" });
      } else {
        res.status(404).send({ error: "Nothing added" });
      }
    } catch (err) {
      // fin du try

      logger.error(err);
      res.sendStatus(500);
    }
  }

  static async addQuestion(req, res) {
    try {
      const { titre_question, contenu_question } = req.body;

      const created_at = new Date();
      const created_by = "2";

      const fields = [
        [titre_question, contenu_question, created_by, created_at],
      ];

      const queryResult = await Post.addQuestion(fields);

      if (queryResult.affectedRows > 0) {
        res.send({
          message: "Question successfully added",
          id: queryResult.insertId,
        });
      } else {
        res.status(404).send({ error: "Nothing added" });
      }
    } catch (err) {
      // fin du try

      logger.error(err);
      res.sendStatus(500);
    }
  }

  static async addPost(req, res) {
    const { type } = req.body;

    try {
      // Add a response
      if (type == "reponse") {
        PostController.addResponse(req, res);

        // Add a question
      }
      if (req.body.type == "question") {
        PostController.addQuestion(req, res);
      }
    } catch (err) {
      // fin du try

      logger.error(err);
      res.sendStatus(500);
    }
  }

  static async getPosts(req, res) {
    try {
      const queryResult = await Post.getAll();

      res.send(queryResult);
    } catch (err) {
      // fin du try

      logger.error(err);
      res.sendStatus(500);
    }
  }
}

module.exports = PostController;
