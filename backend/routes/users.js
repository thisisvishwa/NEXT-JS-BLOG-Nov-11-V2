const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Get all users
router.get('/', auth, userController.getUsers);

// Get a single user
router.get('/:id', auth, userController.getUser);

// Create a new user
router.post('/', userController.createUser);

// Update a user
router.put('/:id', auth, userController.updateUser);

// Delete a user
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;