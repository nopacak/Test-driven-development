const assert = require('assert');
const {
    addChar,
    cos,
    sin,
    tan,
    sqrt,
    ln,
    exp,
    deleteChar,
    percent,
    changeSign,
    compute,
    square,
    checkNum
} = require('../script.js');

describe("Calculator Functions", () => {
    describe("addChar", () => {
        it("should add character to null input value", () => {
            let input = { value: null };
            addChar(input, null);
            assert.strictEqual(input.value, null);
        });
    });

    describe("cos", () => {
        it("should compute cosine of non-numeric string", () => {
            let form = { display: { value: 'abc' } };
            cos(form);
            assert(isNaN(form.display.value));
        });
    });

    describe("sin", () => {
        it("should compute sine of empty string", () => {
            let form = { display: { value: '' } };
            sin(form);
            assert(isNaN(form.display.value));
        });
    });

    describe("deleteChar", () => {
        it("should handle deleting character from empty input value", () => {
            let input = { value: '' };
            deleteChar(input);
            assert.strictEqual(input.value, '');
        });
    });

    describe("tan", () => {
        it("should compute tangent of special character", () => {
            let form = { display: { value: '@' } };
            tan(form);
            assert(isNaN(form.display.value));
        });
    });

    describe("sqrt", () => {
        it("should compute square root of negative number", () => {
            let form = { display: { value: '-4' } };
            sqrt(form);
            assert(isNaN(form.display.value));
        });
    });

    describe("changeSign", () => {
        it("should change sign of percentage", () => {
            let input = { value: '50%' };
            changeSign(input);
            assert.strictEqual(input.value, '-50%');
        });
    });

    describe("exp", () => {
        it("should compute exponentiation of empty string", () => {
            let form = { display: { value: '' } };
            exp(form);
            assert(isNaN(form.display.value));
        });
    });

    describe("percent", () => {
        it("should convert non-numeric string to percentage", () => {
            let input = { value: 'abc' };
            percent(input);
            assert.strictEqual(input.value, 'abc%');
        });
    });
});
