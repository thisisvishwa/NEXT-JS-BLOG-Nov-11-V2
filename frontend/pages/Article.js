import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import CommentSection from '../components/CommentSection';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      comments: []
    };
  }

  componentDidMount() {
    // Fetch the article and comments based on the article id
    // This is a placeholder and should be replaced with actual API calls
    const article = {}; // Fetch article from API
    const comments = []; // Fetch comments from API

    this.setState({ article, comments });
  }

  render() {
    const { article, comments } = this.state;

    return (
      <div id="article-page">
        <Navbar />
        <main>
          <ArticleCard article={article} />
          <CommentSection comments={comments} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Article;