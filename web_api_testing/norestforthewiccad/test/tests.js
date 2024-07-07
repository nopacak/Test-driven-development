var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');

chai.use(chaiHttp);
describe('Test top level / route', function () {
    it('it should have a 200 status code', function (done) {
        chai.request('http://localhost:3000') // the top level web address
            .get('/') // the route to add to the top level address
            .end((err, res) => { // what to do once the request returns
                assert.equal(res.status, 200); // check we have the 200 OK HTTP code
                10
                done(); // finish up
            });
    });
});
