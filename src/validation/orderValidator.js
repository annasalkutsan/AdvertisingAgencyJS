const { body, validationResult } = require('express-validator');

exports.validateOrderData = [
    body('Status')
        .trim()
        .notEmpty()
        .withMessage('Статус не должен быть пустым'),

    body('StartData')
        .optional({ nullable: true })
        .isDate()
        .withMessage('Некорректная дата начала'),

    body('FinishData')
        .optional({ nullable: true })
        .isDate()
        .withMessage('Некорректная дата окончания'),

    body('UserID')
        .isInt({ min: 1 })
        .withMessage('Идентификатор пользователя должен быть положительным целым числом'),

    body('TaskID')
        .isInt({ min: 1 })
        .withMessage('Идентификатор задачи должен быть положительным целым числом'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
