const { body, validationResult } = require("express-validator");

exports.validateUserData = [
  body("Surname")
    .trim()
    .notEmpty()
    .withMessage("Фамилия не должна быть пустой")
    .isLength({ max: 60 })
    .withMessage("Фамилия должна содержать не более 60 символов"),

  body("Name")
    .trim()
    .notEmpty()
    .withMessage("Имя не должно быть пустым")
    .isLength({ max: 60 })
    .withMessage("Имя должно содержать не более 60 символов"),

  body("MiddleName")
    .trim()
    .notEmpty()
    .withMessage("Отчество не должно быть пустым")
    .isLength({ max: 60 })
    .withMessage("Отчество должно содержать не более 60 символов"),
    
  body("Email")
    .trim()
    .notEmpty()
    .withMessage("Email не должен быть пустым")
    .isEmail()
    .withMessage("Неправильный формат Email"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
