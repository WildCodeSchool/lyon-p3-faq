const { param, body, validationResult } = require("express-validator");
//const { param } = require("../routes");

exports.signup = [
  body("login").isEmail().normalizeEmail(),
  body("password").isLength({ min: 5, max: 100 }),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else next();
  },
];

exports.checkUser = [
  body("name").exists().notEmpty().isLength({ max: 100 }),
  body("mail").isEmail().normalizeEmail(),

  body("role").isLength({ max: 100 }).isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else next();
  },
];

exports.checkIdUser = [
  param("id").exists().isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else next();
  },
];

