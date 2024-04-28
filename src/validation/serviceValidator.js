const { body, validationResult } = require("express-validator");

exports.validateServiceData = [
  body("Name")
    .trim()
    .notEmpty()
    .withMessage("Название не должно быть пустым")
    .isLength({ max: 255 })
    .withMessage("Название должно содержать не более 255 символов"),
  body("Deadline")
    .trim()
    .notEmpty()
    .withMessage("Срок выполнения не должен быть пустым")
    .isInt({ min: 1 })
    .withMessage("Срок выполнения должен быть положительным целым числом"),
  body("MaterialID")
    .trim()
    .notEmpty()
    .withMessage("Идентификатор материала не должен быть пустым")
    .isInt({ min: 1 })
    .withMessage(
      "Идентификатор материала должен быть положительным целым числом"
    ),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
