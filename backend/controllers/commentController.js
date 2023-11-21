```javascript
const Comment = require('../models/Comment');

// Get all comments
exports.getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.status(200).json({
            success: true,
            data: comments
        });
    } catch (error) {
        next(error);
    }
};

// Get a single comment
exports.getComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return next(new Error('Comment not found'));
        }
        res.status(200).json({
            success: true,
            data: comment
        });
    } catch (error) {
        next(error);
    }
};

// Create a comment
exports.createComment = async (req, res, next) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json({
            success: true,
            data: comment
        });
    } catch (error) {
        next(error);
    }
};

// Update a comment
exports.updateComment = async (req, res, next) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!comment) {
            return next(new Error('Comment not found'));
        }
        res.status(200).json({
            success: true,
            data: comment
        });
    } catch (error) {
        next(error);
    }
};

// Delete a comment
exports.deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return next(new Error('Comment not found'));
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        next(error);
    }
};
```