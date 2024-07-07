const assert = require('assert');

describe("Set of functions", () => {
    describe("Single test", () => {
        const s = "Hello es6 mocha";
        const parts = s.split(" ");
        it("Should have three parts", () => {
            assert.equal(parts.length, 3);
        })
    })
});