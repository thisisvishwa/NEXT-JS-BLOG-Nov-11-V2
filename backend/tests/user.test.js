```javascript
const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

describe('User API endpoints', () => {
    let testUser;

    beforeAll(async () => {
        testUser = new User({
            username: 'testUser',
            email: 'testUser@example.com',
            password: 'testPass123'
        });
        await testUser.save();
    });

    afterAll(async () => {
        await User.deleteMany();
    });

    // Test case: User registration
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                username: 'newUser',
                email: 'newUser@example.com',
                password: 'newPass123'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('username', 'newUser');
    });

    // Test case: User login
    it('should authenticate a user', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({
                email: 'testUser@example.com',
                password: 'testPass123'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });

    // Test case: Fetch user profile
    it('should fetch user profile', async () => {
        const res = await request(app)
            .get(`/api/users/${testUser._id}`)
            .set('Authorization', `Bearer ${testUser.token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('username', 'testUser');
    });
});
```