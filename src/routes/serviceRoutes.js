const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const validate = require('../validation/serviceValidator');

router.route('/services')
.get(serviceController.getAllServices)
.post(validate.validateServiceData, serviceController.createService);

router.route('/services/:id')
.get(serviceController.getServiceById)
.put(validate.validateServiceData, serviceController.updateService)
.delete(serviceController.deleteService);

module.exports = router;
