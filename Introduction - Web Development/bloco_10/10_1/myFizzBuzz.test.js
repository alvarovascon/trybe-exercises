const myFizzBuzz = require('./myFizzBuzz');

describe('fizzbuzz', () => {
  it('fizzbuzz com numeros', () => {
    expect(myFizzBuzz(45)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
  });
  
  it('should return false', () => {
    expect(myFizzBuzz('3')).toBe(false);
  });
})
