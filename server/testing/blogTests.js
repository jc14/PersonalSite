var expect = require('chai').expect;
var assert = require('chai').assert;

var laina = {
  type: "Human"
}

describe("Testing the tests!", function() {
  it("Tests things!", function() {
    expect(laina).to.be.a('Object');
    expect(laina.type).to.equal('Human');
  })
})
