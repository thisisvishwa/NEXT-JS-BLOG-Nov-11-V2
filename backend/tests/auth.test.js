```javascript
const request = require('supertest');
const app = require('../server');
const { User } = require('../models/User');
const { authUser } = require('../controllers/authController');

describe('Auth API', () => {
    let user;

    beforeEach(async () => {
        user = new User({
            username: 'testUser',
            email: 'testUser@example.com',
            password: 'testPassword'
        });
        await user.save();
    });

    afterEach(async () => {
        await User.deleteMany({});
    });

    describe('POST /auth', () => {
        it('should authenticate user and return token', async () => {
            const res = await request(app)
                .post('/auth')
                .send({
                    email: 'testUser@example.com',
                    password: 'testPassword'
                });

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('token');
        });

        it('should return 400 if invalid credentials are provided', async () => {
            const res = await request(app)
                .post('/auth')
                .send({
                    email: 'testUser@example.com',
                    password: 'wrongPassword'
                });

            expect(res.status).toBe(400);
        });
    });
});
```