```javascript
import React from 'react';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // Fetch comments from API
        fetch('/api/comments')
            .then(response => response.json())
            .then(data => this.setState({ comments: data, loading: false }))
            .catch(error => this.setState({ error, loading: false }));
    }

    render() {
        const { comments, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div id="comment-section">
                <h2>Comments</h2>
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <h3>{comment.author}</h3>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default CommentSection;
```