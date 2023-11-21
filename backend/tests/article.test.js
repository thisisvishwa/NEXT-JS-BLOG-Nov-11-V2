```javascript
const request = require('supertest');
const app = require('../server');
const { Article } = require('../models/Article');

describe('Article API', () => {
  let article;

  beforeAll(async () => {
    article = await Article.create({
      title: 'Test Article',
      content: 'This is a test article',
      author: 'Test Author',
      tags: ['test', 'article'],
    });
  });

  afterAll(async () => {
    await Article.deleteMany();
  });

  test('GET /articles', async () => {
    const response = await request(app).get('/articles');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('GET /articles/:id', async () => {
    const response = await request(app).get(`/articles/${article._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe(article.title);
    expect(response.body.content).toBe(article.content);
  });

  test('POST /articles', async () => {
    const response = await request(app)
      .post('/articles')
      .send({
        title: 'New Test Article',
        content: 'This is a new test article',
        author: 'Test Author',
        tags: ['new', 'test', 'article'],
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('New Test Article');
    expect(response.body.content).toBe('This is a new test article');
  });

  test('PUT /articles/:id', async () => {
    const response = await request(app)
      .put(`/articles/${article._id}`)
      .send({
        title: 'Updated Test Article',
        content: 'This is an updated test article',
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe('Updated Test Article');
    expect(response.body.content).toBe('This is an updated test article');
  });

  test('DELETE /articles/:id', async () => {
    const response = await request(app).delete(`/articles/${article._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Article deleted successfully');
  });
});
```