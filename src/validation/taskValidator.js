const { body, validationResult } = require("express-validator");

exports.validateTaskData = [
    body("Status")
        .trim()
        .notEmpty()
        .withMessage("Статус не должен быть пустым")
        .custom((value) => {
            // Допустимые значения для статуса
            const validStatusValues = ["В работе", "Завершено", "В ожидании"];
            // Проверяем, что значение входит в список допустимых
            if (!validStatusValues.includes(value)) {
                throw new Error("Недопустимое значение статуса");
            }
            return true;
        }),

    body("StartData")
        .optional({ nullable: true }) // Поле опционально, может быть пустым
        .isDate() // Проверяем, что значение является корректной датой
        .withMessage("Некорректная дата начала"), // Сообщение об ошибке, если дата некорректна

    body("FinishData")
        .optional({ nullable: true })
        .isDate()
        .withMessage("Некорректная дата окончания"),

    body("OrdersID")
        .optional({ nullable: true })
        .isInt() // Проверяем, что значение является целым числом
        .withMessage("ID заказа должен быть целым числом"), // Сообщение об ошибке, если значение не является целым числом

    body("ExecutorID")
        .optional({ nullable: true })
        .isInt()
        .withMessage("ID исполнителя должен быть целым числом"),

    body("ServiceID")
        .optional({ nullable: true })
        .isInt()
        .withMessage("ID услуги должен быть целым числом"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
