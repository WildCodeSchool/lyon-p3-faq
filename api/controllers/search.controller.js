const Question = require("../models/question.model");
const Search = require("../models/search.model");
const logger = require("../library/logger");
const {stringSearch, buildQueryAttributes} = require("../library/utils/search");

class SearchController {
  static async search(req, res) {
    const search = stringSearch(req.query.s);
    try {
      if (search.length > process.env.SEARCH_MIN_CHAR) {
        const {attr, attr2} = buildQueryAttributes(search);
        let hasSpace = search.search(' ') > -1;
        let searchResults = await Search.getSearchResult(attr);
        let searchResults2 = [];
        if (searchResults.length < 9 && hasSpace) {
          searchResults2 = await Search.getSearchResult(attr2);
        }
        let allSearchResults = [...searchResults2, ...searchResults];
        let questionIds = allSearchResults.map(elem => elem.id_question);
        const questions = await Question.getIds(questionIds);
        if (questions.length > 0) {
          res.send(questions);
        } else {
          res.status(404).send('No result')
        }
      } else {
        res.status(400).send('Minimum chars: ' + process.env.SEARCH_MIN_CHAR)
      }
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }
}

module.exports = SearchController;
