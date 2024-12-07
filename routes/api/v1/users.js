// Include express
const express = require('express');

// Include router
const router = express.Router();

// Include controllers
const userController = require('../../../controllers/api/v1/users');
const authController = require('../../../controllers/api/v1/auth');

// Define routes
router.get('/', userController.index);

router.delete('/:id', userController.destroy);

router.post('/register', authController.register);
router.post('/login', authController.login);

// Export routes
module.exports = router;