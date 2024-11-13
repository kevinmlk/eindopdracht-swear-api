// Include express
const express = require('express');

// Include router
const router = express.Router();

// Include controller
const orderController = require('../../../controllers/api/v1/orders');

// Define routes
router.get('/', orderController.index);

router.post('/', orderController.create);

// Export routes
module.exports = router;