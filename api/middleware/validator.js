const { param, body, validationResult } = require("express-validator");
//const { param } = require("../routes");

exports.signup = [
  body("login").isEmail().normalizeEmail(),
  body("password").isLength({ min: 5, max: 100 }),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
<<<<<<< HEAD
      res.status(400).json({ errors: errors.array() });
=======
       res.status(400).json({ errors: errors.array() });
>>>>>>> fixing issues by MM
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
<<<<<<< HEAD
      res.status(400).json({ errors: errors.array() });
=======
       res.status(400).json({ errors: errors.array() });
>>>>>>> fixing issues by MM
    } else next();
  },
];

exports.checkId = [
  param("id").exists().isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
<<<<<<< HEAD
      res.status(400).json({ errors: errors.array() });
=======
       res.status(400).json({ errors: errors.array() });
>>>>>>> fixing issues by MM
    } else next();
  },
];

<<<<<<< HEAD
exports.checkAction = [
  body("action").exists().notEmpty().isAlpha(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else next();
  },
];

exports.checkAddResponse = [
  body("question_id").exists().notEmpty().isNumeric(),
  body("contenu").exists().notEmpty().isLength({ max: 1000 }),
  //body("created_by").exists().notEmpty().isNumeric(),

=======
exports.checkResponse = [
  body("question_id").exists().notEmpty().isNumeric(),
  body("contenu").exists().notEmpty().isLength({ max: 1000 }),
  body("created_by").exists().notEmpty().isNumeric(),
  body("idUser").exists().notEmpty().isNumeric(),
>>>>>>> fixing issues by MM
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
<<<<<<< HEAD
      res.status(400).json({ errors: errors.array() });
=======
       res.status(400).json({ errors: errors.array() });
>>>>>>> fixing issues by MM
    } else next();
  },
];

<<<<<<< HEAD
exports.checkResponse = [
  body("titre_question").exists().notEmpty().isLength({ max: 1000 }),
  body("contenu_question").exists().notEmpty().isLength({ max: 1000 }),
  body("contenu_reponse").exists().notEmpty().isLength({ max: 1000 }),

=======
exports.checkAction = [
  body("action").exists().notEmpty().isAlpha(),
 
>>>>>>> fixing issues by MM
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
<<<<<<< HEAD
      res.status(400).json({ errors: errors.array() });
=======
       res.status(400).json({ errors: errors.array() });
>>>>>>> fixing issues by MM
    } else next();
  },
];

exports.checkIdUser = [
  body("idUser").exists().notEmpty().isNumeric(),
<<<<<<< HEAD
  (req, res, next) => {
    errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else next();
  },
];
=======
 
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
       res.status(400).json({ errors: errors.array() });
    } else next();
  },
];

>>>>>>> fixing issues by MM
