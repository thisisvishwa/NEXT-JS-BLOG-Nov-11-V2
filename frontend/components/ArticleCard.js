```javascript
import React from 'react';

const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <img src={article.image} alt={article.title} />
            <div className="article-content">
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                <div className="article-meta">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                </div>
                <a href={`/article/${article.id}`}>Read More</a>
            </div>
        </div>
    );
};

export default ArticleCard;
```