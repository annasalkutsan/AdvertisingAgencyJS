const { body, validationResult } = require('express-validator');

exports.validateExecutorData = [
    body('Surname')
        .trim()
        .notEmpty()
        .withMessage('Фамилия не должна быть пустой'),

    body('Name')
        .trim()
        .notEmpty()
        .withMessage('Имя не должно быть пустым'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
