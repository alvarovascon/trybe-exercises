const sum = require('./soma');

describe('função soma', () => {
  it('should return the correct value', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('should throw if parameters aren`t numbers', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
});