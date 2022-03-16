const express = require('express');
const authorController = require('../controllers/authorController');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register', authorController.register);
router.post('/login', authorController.login);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
module.exports = router;