const PostModel = require("../models/post.model");
class PostController {



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

        const queryResult = await PostModel.publishPost(fields, idQuestion);
        res.send("post published");
      } else if (action === "archive") {
        fields = {
          disabled_by: idUser,
          disabled_at: new Date(),
          publicated_by: null,
          publicated_at: null,
        };

        const queryResult = await PostModel.archivePost(fields, idQuestion);
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

  static async updatePost(req, res) {
    try {
      let idQuestion = req.params.id;
      const { titre_question, contenu_question, contenu_reponse } = req.body;

     
        const fields = {
          titre: titre_question,
          "question.contenu": contenu_question,
          "reponse.contenu": contenu_reponse,
        };

        const queryResult = await PostModel.update(idQuestion, fields);

        res.status(201).send("Post successfully updated");
      
        
    } catch (err) {
      // fin du try

      res.status(400).json({ message: err });
    }
  }

  static async addResponse(req, res) {
    try {
      const { question_id, contenu, created_by } = req.body;

      const fields = [[question_id, contenu, created_by]];

      const queryResult = await PostModel.addOne(fields);

      res.status(201).send("Reponse successfully added");
    } catch (err) {
      // fin du try

      res.json({ message: err });
    }
  }

  static async getPosts(req, res) {
    try {
      const queryResult = await PostModel.getAll();

      res.send(queryResult);
    } catch (err) {
      // fin du try

      res.json({ message: err });
    }
  }
}

module.exports = PostController;
