```javascript
const Article = require('../models/Article');
const User = require('../models/User');

const getSiteAnalytics = async () => {
    try {
        const totalArticles = await Article.countDocuments();
        const totalUsers = await User.countDocuments();
        const mostPopularArticles = await Article.find().sort({ views: -1 }).limit(5);
        const mostActiveUsers = await User.find().sort({ articlesPosted: -1 }).limit(5);

        return {
            totalArticles,
            totalUsers,
            mostPopularArticles,
            mostActiveUsers
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    getSiteAnalytics
};
```