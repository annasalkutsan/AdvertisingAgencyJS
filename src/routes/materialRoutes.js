const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const validate = require('../validation/materialValidator');

router.route('/materials')
.get(materialController.getAllMaterials)
.post(validate.validateMaterialData, materialController.createMaterial);

router.route('/materials/:id')
.get(materialController.getMaterialById)
.put(validate.validateMaterialData, materialController.updateMaterial)
.delete(materialController.deleteMaterial);

module.exports = router;
