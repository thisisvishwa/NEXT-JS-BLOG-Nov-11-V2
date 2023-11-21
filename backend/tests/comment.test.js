```javascript
const request = require('supertest');
const app = require('../server');
const Comment = require('../models/Comment');

describe('Comment API', () => {
    let commentData = {
        content: 'This is a test comment',
        author: 'Test User',
        articleId: '1234567890'
    };

    beforeEach(async () => {
        await Comment.deleteMany();
    });

    test('Should create a new comment', async () => {
        await request(app)
            .post('/api/comments')
            .send(commentData)
            .expect(201);
    });

    test('Should get all comments', async () => {
        const comment = new Comment(commentData);
        await comment.save();

        await request(app)
            .get('/api/comments')
            .expect(200)
            .then(response => {
                expect(response.body[0]).toHaveProperty('content', commentData.content);
                expect(response.body[0]).toHaveProperty('author', commentData.author);
                expect(response.body[0]).toHaveProperty('articleId', commentData.articleId);
            });
    });

    test('Should delete a comment', async () => {
        const comment = new Comment(commentData);
        await comment.save();

        await request(app)
            .delete(`/api/comments/${comment._id}`)
            .expect(200);
    });
});
```