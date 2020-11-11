const db = require("../datasource/mysql");
const postModel = require("../models/post.model");
class PostController {
  static async updatePostStatus(req, res) {
    try {
      let idQuestion = req.params.id;
      const { idUser, action } = req.body;

      if (idUser === undefined || action === undefined) {
        return res
          .status(400)
          .send("JSON incorrect. Champs attendus : idUser et action");
      }

      let fields = {};
      if (action === "publish") {
        fields = {
          publicated_by: idUser,
          publicated_at: new Date(),
          disabled_by: null,
          disabled_at: null,
        };

        const queryResult = await postModel.publishPost(fields, idQuestion);
        res.send("post published");
      } else if (action === "archive") {
        fields = {
          disabled_by: idUser,
          disabled_at: new Date(),
          publicated_by: null,
          publicated_at: null,
        };

        const queryResult = await postModel.archivePost(fields, idQuestion);
        res.send("post archived");
      } else {
        return res
          .status(400)
          .send("Please type a valid action : publish or archive");
      }
    } catch (err) {
      // fin du try

      res.json({ message: err });
    }
  }

  static async addResponse(req, res) {
    try {
      const { question_id, contenu, created_by } = req.body;

      const fields = [[question_id, contenu, created_by]];

      const queryResult = await postModel.addOne(fields);

      res.status(201).send("Reponse successfully added");
    } catch (err) {
      // fin du try

      res.json({ message: err });
    }
  }

  static async getPosts(req, res) {
    try {
      const queryResult = await postModel.getAll();

      res.send(queryResult);
    } catch (err) {
      // fin du try

      res.json({ message: err });
    }
  }
}

module.exports = PostController;
