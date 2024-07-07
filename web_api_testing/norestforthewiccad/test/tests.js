import chai from "chai";
import chaiHttp from "chai-http/index.js";
import { strict as assert } from "assert";

chai.use(chaiHttp);
const { request } = chai;

describe("Test top level / route", function () {
    it("should have a 200 status code", function (done) {
        request("http://localhost:3000")
            .get("/")
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            });
    });
});
