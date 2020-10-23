var chai = require("chai");
var should = require("chai").should();
var assert = chai.assert;
var expect = chai.expect;
var Add = require("../math");

describe("addition test", function () {
  it("should return 3 when passed one and two", function () {
    var numOne = 1;
    var numTwo = 2;

    var expectecResults = 3;
    var actualResult = Add(numOne, numTwo);

    actualResult.should.equal(expectecResults);
    expect(actualResult).to.equal(expectecResults);
  });
  it("should not return 3 when passed one and four", function () {
    let numOne = 1;
    let numTwo = 4;

    let notExpected = 3;
    let actualResult = Add(numOne, numTwo);

    expect(actualResult).to.not.equal(notExpected);
  });
  it("should equal add function", () => {
    let numberOne = 5;
    let numberTwo = 10;

    let respectedTotal = 15;
    let actualResults = Add(numberOne, numberTwo)
    expect(respectedTotal).to.equal(actualResults)
  });
  it("assert to not equal", () => {
    let numberOne = 5;
    let numberTwo = 10;
    let respectedTotal = 15;
    let actualResults = Add(numberOne, numberTwo)
    assert.equal(respectedTotal, actualResults)
  })
});
