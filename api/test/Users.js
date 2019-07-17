let chai = require('chai');
let chaiHttp = require('chai-http');

let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

const REGISTER_ROUTE = "/users/register/"
const LOGIN_ROUTE = "/users/authenticate/"
/*
  * Test the /users/register route
  */
describe(REGISTER_ROUTE, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it('/users/register Route should allow user to register new account', (done) => {
        chai.request(server).post(REGISTER_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: randomString, password: randomString })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isTrue(response.success, `User not created - Message: ${response.message}`)
                chai.assert(response.message === 'User added', "Unexpected message from server")
                done();
            });
    });
});

describe(REGISTER_ROUTE, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it('/users/register Route should not allow duplicate usernames', (done) => {
        chai.request(server).post(REGISTER_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: randomString, password: randomString })
            .end((err, res) => {
                chai.request(server).post(REGISTER_ROUTE)
                    .set('content-type', 'application/x-www-form-urlencoded')
                    .send({ username: randomString, password: randomString })
                    .end((err, res) => {
                        var response = JSON.parse(res.text);
                        chai.assert.isFalse(response.success, "Duplicate usernames sucessful")
                        chai.assert(response.message === `Username: ${randomString} already in use`, "Unexpected message from server")
                        done();
                    });
            });
    });
});

describe(REGISTER_ROUTE, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it('/users/register Route should require username and password', (done) => {
        chai.request(server).post(REGISTER_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ password: randomString })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success)
                chai.assert(response.message === "Username required")
            });

        chai.request(server).post(REGISTER_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: randomString, })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success)
                chai.assert(response.message === "Password required")
            });

        done();
    });
});

describe(REGISTER_ROUTE, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it('/users/register Route reject empty strings', (done) => {
        chai.request(server).post(REGISTER_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: '', password: randomString })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success)
                chai.assert(response.message === "Username required")
            });

        chai.request(server).post(REGISTER_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: randomString, password: '' })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success)
                chai.assert(response.message === "Password required")
            });

        done();
    });
});

/*
 * Test the /users/authenticate route
 */
describe(LOGIN_ROUTE, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it('/users/authenticate Route reject empty strings', (done) => {
        chai.request(server).post(LOGIN_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: '', password: randomString })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success)
                chai.assert(response.message === "Username required")
            });

        done();
    });
});

describe(LOGIN_ROUTE, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it('/users/authenticate Route should require username and password', (done) => {
        chai.request(server).post(LOGIN_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ password: randomString })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success)
                chai.assert(response.message === "Username required")
            });

        chai.request(server).post(LOGIN_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: randomString, })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success)
                chai.assert(response.message === "Password required")
            });

        done();
    });
});

describe(LOGIN_ROUTE, () => {
    const fakeUsername = 'fakeUsername1234'

    it('/users/authenticate Route should not allow unknown users to login', (done) => {
        chai.request(server).post(LOGIN_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: fakeUsername, password: fakeUsername })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success)
                chai.assert(response.message === `Username: ${fakeUsername} was not found`)
            });

        done();
    });
});

describe(LOGIN_ROUTE, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it('/users/authenticate Route should not allow known users to login with the wrong password', (done) => {
        before(() => {
            //Create a new user
            chai.request(server).post(REGISTER_ROUTE)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({ username: randomString, password: randomString })
                .end((err, res) => {
                    chai.request(server).post(LOGIN_ROUTE)
                        .set('content-type', 'application/x-www-form-urlencoded')
                        .send({ username: randomString, password: 'WRONGPASSWORD' })
                        .end((err, res) => {
                            var response = JSON.parse(res.text);
                            chai.assert.isFalse(response.success, "User logged in with wrong password")
                            chai.assert(response.message === `Invalid credentials`, `Unexpected message from server ${response.message}`)
                        });
                });
        });
        done();
    });
});

describe(LOGIN_ROUTE, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it('/users/authenticate Route should allow known users to login with the right password', (done) => {
        //Create a new user
        chai.request(server).post(REGISTER_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: randomString, password: randomString })
            .end((err, res) => {
                chai.request(server).post(LOGIN_ROUTE)
                    .set('content-type', 'application/x-www-form-urlencoded')
                    .send({ username: randomString, password: randomString })
                    .end((err, res) => {
                        var response = JSON.parse(res.text);
                        chai.assert.isTrue(response.success, "Login failing")
                        chai.assert.isString(response.data.token, "Token not string")
                    });
            });
        done();
    });
});
