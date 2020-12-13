const Report = require("../models/report.model");
const logger = require("../library/logger");

class ReportController {
  static async report(req, res) {
    const IP =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress;
    try {
      if (
        IP === undefined ||
        req.body.form.id === undefined ||
        req.body.form.raison === undefined
      ) {
        res.sendStatus(400);
      } else {
        const reported = await Report.report(
          req.body.form.id,
          IP,
          req.body.form.raison
        );
        reported.isInsert === true ? res.sendStatus(201) : res.sendStatus(403);
      }
    } catch (err) {
      res.sendStatus(500);
      console.log(err);
      logger.error(err);
    }
  }
}
module.exports = ReportController;
