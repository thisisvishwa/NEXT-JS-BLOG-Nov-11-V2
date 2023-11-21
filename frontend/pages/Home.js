```javascript
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredArticles: [],
            latestPosts: [],
            categories: []
        };
    }

    componentDidMount() {
        this.getFeaturedArticles();
        this.getLatestPosts();
        this.getCategories();
    }

    getFeaturedArticles() {
        // Fetch featured articles from API
    }

    getLatestPosts() {
        // Fetch latest posts from API
    }

    getCategories() {
        // Fetch categories from API
    }

    render() {
        return (
            <div id="home-page">
                <Navbar />
                <div className="featured-articles">
                    {this.state.featuredArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
                <div className="latest-posts">
                    {this.state.latestPosts.map(post => (
                        <ArticleCard key={post.id} post={post} />
                    ))}
                </div>
                <div className="categories">
                    {this.state.categories.map(category => (
                        <div key={category.id} className="category">
                            {category.name}
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
```