```javascript
const seo = {};

// Function to generate meta tags
seo.generateMetaTags = (title, description, keywords) => {
    return [
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: description }
    ];
};

// Function to generate structured data
seo.generateStructuredData = (article) => {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "image": article.image,
        "author": {
            "@type": "Person",
            "name": article.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Tech Blog",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.techblog.com/logo.png"
            }
        },
        "datePublished": article.datePublished,
        "dateModified": article.dateModified
    };
};

// Function to generate SEO-friendly URL
seo.generateSeoFriendlyUrl = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

module.exports = seo;
```