const express = require('express');
const router = express.Router();
const rentController = require('../controllers/rentController');
const validate = require('../validation/rentValidator');

router.route('/rents')
.get(rentController.getAllRents)
.post(validate.validateRentData, rentController.createRent);

router.route('/rents/:id')
.get(rentController.getRentById)
.put(validate.validateRentData, rentController.updateRent)
.delete(rentController.deleteRent);

module.exports = router;
