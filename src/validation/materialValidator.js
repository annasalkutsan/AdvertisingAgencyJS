const { body, validationResult } = require('express-validator');

exports.validateMaterialData = [
    body('Name')
        .trim()
        .notEmpty()
        .withMessage('Имя материала не должно быть пустым'),

    body('Amount')
        .isInt({ min: 0 })
        .withMessage('Количество материала должно быть неотрицательным целым числом'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
