```javascript
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

// Get all comments for a specific article
router.get('/article/:articleId', auth, commentController.getComments);

// Post a new comment
router.post('/article/:articleId', auth, commentController.postComment);

// Edit a comment
router.put('/:commentId', auth, commentController.editComment);

// Delete a comment
router.delete('/:commentId', auth, commentController.deleteComment);

module.exports = router;
```