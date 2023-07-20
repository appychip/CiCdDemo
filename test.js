// Import necessary modules
const { expect } = require('chai');

// Import the function to be tested
const { sayHello } = require('./app');

// Test case for the sayHello function
describe('sayHello', () => {
  it('should return "Hello, World!"', () => {
    // Call the function and store the result
    const result = sayHello();

    // Assert the expected result
    expect(result).to.equal('Hello, World!');
  });
});
