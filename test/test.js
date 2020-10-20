var chai = require('chai')
var should = require('chai').should()
var expect = chai.expect;
var Add = require("../math");

describe("addition test", function () {
  it("should return 3 when passed one and two", function () {
    var numOne = 1;
    var numTwo = 2;

    var expectecResults = 3;
    var actualResult = Add(numOne, numTwo);

    actualResult.should.equal(expectecResults)
    expect(actualResult).to.equal(expectecResults)
  });
  it("should not return 3 when passed one and four", function(){
      let numOne = 1;
      let numTwo = 4;

      let notExpected = 3
      let actualResult = Add(numOne, numTwo)

      expect(actualResult).to.not.equal(notExpected)
  })
});
