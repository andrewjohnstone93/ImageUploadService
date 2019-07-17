let chai = require('chai');
let chaiHttp = require('chai-http');

let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

const REGISTER_ROUTE = "/users/register/"
const LOGIN_ROUTE = "/users/authenticate/"

const CREATE_IMAGE_METADATA = "/images/upload"
const GET_IMAGE_METADATA = "/images/getAll"

describe(CREATE_IMAGE_METADATA, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it(CREATE_IMAGE_METADATA + 'Route should disallow none logged in users', (done) => {
        //Create a new user
        chai.request(server).post(CREATE_IMAGE_METADATA)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ label: randomString })
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success, "non-autheticated user allowed")
            });
        done();
    });
});

describe(CREATE_IMAGE_METADATA, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it(CREATE_IMAGE_METADATA + 'Route should allow known users that are logged in to create image metadata', (done) => {
        //Create a new user
        chai.request(server).post(REGISTER_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: randomString, password: randomString })
            .end((err, res) => {
                chai.request(server).post(LOGIN_ROUTE)
                    .set('content-type', 'application/x-www-form-urlencoded')
                    .send({ username: randomString, password: randomString })
                    .end((err, res) => {
                        var loginResponse = JSON.parse(res.text);
                        chai.request(server).post(CREATE_IMAGE_METADATA)
                            .set('content-type', 'application/x-www-form-urlencoded')
                            .set('Authorization', 'bearer ' + loginResponse.data.token)
                            .send({})
                            .end((err, res) => {
                                var response = JSON.parse(res.text);
                                chai.assert.isFalse(response.success, "Metadata without label added")
                            });
                        done();
                    });
            });
    });
});

describe(GET_IMAGE_METADATA, () => {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    it(GET_IMAGE_METADATA + 'Route should allow known users to view image metadata', (done) => {
        //Create a new user
        chai.request(server).post(REGISTER_ROUTE)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({ username: randomString, password: randomString })
            .end((err, res) => {
                chai.request(server).post(LOGIN_ROUTE)
                    .set('content-type', 'application/x-www-form-urlencoded')
                    .send({ username: randomString, password: randomString })
                    .end((err, res) => {
                        var loginResponse = JSON.parse(res.text);
                        chai.request(server).get(GET_IMAGE_METADATA)
                            .set('Authorization', 'bearer ' + loginResponse.data.token)
                            .end((err, res) => {
                                var response = JSON.parse(res.text);
                                chai.assert.isTrue(response.success)
                            });
                        done();
                    });
            });
    });
});

describe(GET_IMAGE_METADATA, () => {
    it(GET_IMAGE_METADATA + 'Route should disallow unknown users to view image metadata', (done) => {
        //Create a new user
        chai.request(server).get(GET_IMAGE_METADATA)
            .end((err, res) => {
                var response = JSON.parse(res.text);
                chai.assert.isFalse(response.success, "Unauthticated user allowed to view metadata")
            });
        done();
    });
});