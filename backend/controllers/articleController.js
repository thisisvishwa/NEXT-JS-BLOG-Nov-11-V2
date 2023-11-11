```javascript
const Article = require('../models/Article');

// Get all articles
exports.getArticles = async (req, res, next) => {
    try {
        const articles = await Article.find();
        res.status(200).json({
            success: true,
            data: articles
        });
    } catch (err) {
        next(err);
    }
};

// Get single article
exports.getArticle = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return next(new Error('Article not found'));
        }
        res.status(200).json({
            success: true,
            data: article
        });
    } catch (err) {
        next(err);
    }
};

// Create new article
exports.createArticle = async (req, res, next) => {
    try {
        const article = await Article.create(req.body);
        res.status(201).json({
            success: true,
            data: article
        });
    } catch (err) {
        next(err);
    }
};

// Update article
exports.updateArticle = async (req, res, next) => {
    try {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!article) {
            return next(new Error('Article not found'));
        }
        res.status(200).json({
            success: true,
            data: article
        });
    } catch (err) {
        next(err);
    }
};

// Delete article
exports.deleteArticle = async (req, res, next) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
            return next(new Error('Article not found'));
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        next(err);
    }
};
```