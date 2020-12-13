const Vote = require("../models/vote.model");
const logger = require("../library/logger");

class VoteController {
  static async vote(req, res) {
    const IP =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress;
    try {
      if (IP === undefined || req.body.vote.id === undefined) {
        res.sendStatus(400);
      } else {
        const voted = await Vote.upVote(req.body.vote.id, IP);
        voted.isInsert === true ? res.sendStatus(201) : res.sendStatus(403);
      }
    } catch (err) {
      res.sendStatus(500);
      logger.error(err);
    }
  }
}
module.exports = VoteController;
