const { body, validationResult } = require("express-validator");

exports.validateRentData = [
  body("PricePerDay")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Цена в день должна быть положительным целым числом"),
  body("ExecutorID")
    .trim()
    .notEmpty()
    .withMessage("Идентификатор исполнителя не должен быть пустым")
    .isInt({ min: 1 })
    .withMessage(
      "Идентификатор исполнителя должен быть положительным целым числом"
    ),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
