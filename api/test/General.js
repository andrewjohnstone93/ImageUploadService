let chai = require('chai');
let chaiHttp = require('chai-http');

let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);


/*
  * Test the / route
  */
 describe('/', () => {
    it('it should GET "Encrypted Image Hosting Service API"', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
                chai.assert(res.text === 'Encrypted Image Hosting Service API', "Home page should echo name of service")
            done();
          });
    });
});

