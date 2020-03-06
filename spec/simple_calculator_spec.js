let myTest = require("../src/simple_calculator");
let add = myTest.add;
let multiply = myTest.multiply;

// addition
describe("A simple calculator that adds", function() {

  it("should be able to add two numbers", function() {
    expect(add(1, 2)).toEqual(3);
  });

  it("should be able to add two  negative numbers", function() {
    expect(add(-1, -1)).toEqual(-2);
  });

  it("should be able to add multiple integers,", function() {
    expect(add(1, 2, 3, 4, 5)).toEqual(15);
  });
});

// multiply
describe("A simple calculator that multiplies integers ", function() {

  it("should be able to multiply two integers", function() {
    expect(multiply(1, 3)).toEqual(3);
  });

  it("should be able to multiply positive and negative integers", function() {
    expect(multiply(-1, 3)).toEqual(-3);
  });

  it("should be able to multiply more integers", function() {
    expect(multiply(1, 2, 3, 4, 5)).toEqual(120);
  });
});
