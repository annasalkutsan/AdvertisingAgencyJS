const { body, validationResult } = require('express-validator');

exports.validateOrderRentData = [
    body('Status')
        .trim()
        .notEmpty()
        .withMessage('Статус не должен быть пустым')
        .custom((value) => {
            // Допустимые значения для статуса
            const validStatusValues = ["В работе", "Завершено", "В ожидании"];
            // Проверяем, что значение входит в список допустимых
            if (!validStatusValues.includes(value)) {
                throw new Error("Недопустимое значение статуса");
            }
            return true;
        }),

    body('CountDays')
        .isInt({ min: 1 })
        .withMessage('Количество дней должно быть положительным целым числом'),

    body('UserID')
        .isInt({ min: 1 })
        .withMessage('Идентификатор пользователя должен быть положительным целым числом'),

    body('RentID')
        .isInt({ min: 1 })
        .withMessage('Идентификатор аренды должен быть положительным целым числом'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
