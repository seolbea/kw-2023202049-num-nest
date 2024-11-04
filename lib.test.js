const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime[2] should be ture", () => {
    expect(lib.prime([2])).toBe(true);
});

test("prime[17] should be ture", () => {
    expect(lib.prime([17])).toBe(true);
});

test("factorial[5] should be 120", () => {
    expect(lib.factorial([5])).toBe(120);
});

test("factorial[10] should be 3628800", () => {
    expect(lib.factorial([10])).toBe(3628800);
});