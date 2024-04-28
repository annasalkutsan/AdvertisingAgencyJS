const express = require('express');
const router = express.Router();
const orderRentController = require('../controllers/orderRentController');
const validate = require('../validation/orderRentValidator');

router.route('/ordersRent')
.get(orderRentController.getAllOrdersRents)
.post(validate.validateOrderRentData, orderRentController.createOrderRent);

router.route('/ordersRent/:id')
.get(orderRentController.getOrderRentById)
.put(validate.validateOrderRentData, orderRentController.updateOrderRent)
.delete(orderRentController.deleteOrderRent);

module.exports = router;
