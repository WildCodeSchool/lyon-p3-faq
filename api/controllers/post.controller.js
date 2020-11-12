const Post = require("../models/post.model");
const validator = require("../middleware/validator");
const logger = require("../library/logger");
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
  static async updatePostStatus(req, res) {
    try {
      let idQuestion = req.params.id;
      const { idUser, action } = req.body;

      let fields = {};
      if (action === "publish") {
        fields = {
          publicated_by: idUser,
          publicated_at: new Date(),
          disabled_by: null,
          disabled_at: null,
        };

        const queryResult = await Post.update(idQuestion, fields);
        res.send("post published");
      } else if (action === "archive") {
        fields = {
          disabled_by: idUser,
          disabled_at: new Date(),
          publicated_by: null,
          publicated_at: null,
        };

        const queryResult = await Post.update(idQuestion, fields);
        res.send("post archived");
      } else {
        return res
          .status(400)
          .send("Please type a valid action : publish or archive");
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
        res.send("Post successfully updated");
      } else {
        res.status(204).send({ error: "Nothing updated" });
      }
    } catch (err) {
      // fin du try

      logger.error(err);
      res.sendStatus(500);
    }
  }

  static async addResponse(req, res) {
    try {
      const { question_id, contenu, created_by } = req.body;

      const fields = [[question_id, contenu, created_by]];

      const queryResult = await Post.addOne(fields);

      if (queryResult.affectedRows > 0) {
        res.send("Reponse successfully added");
      } else {
        res.status(204).send({ error: "Nothing added" });
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
