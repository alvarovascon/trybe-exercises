const myFizzBuzz = require('./myFizzBuzz');

test('fizzbuzz', () => {
  expect(myFizzBuzz(45)).toBe('fizzbuzz');
  expect(myFizzBuzz(9)).toBe('fizz');
  expect(myFizzBuzz(10)).toBe('buzz');
  expect(myFizzBuzz(7)).toBe(7);
  expect(myFizzBuzz('3')).toBe(false);
});