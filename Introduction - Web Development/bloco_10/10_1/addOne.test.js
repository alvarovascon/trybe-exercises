const addOne = require('./addOne');

test('add one to array', () => {
  const myArray = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];
  const output = addOne(myArray);
  expect(output).toEqual(expected);
});
