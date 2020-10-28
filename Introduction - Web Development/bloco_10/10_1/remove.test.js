const { test, expect } = require('@jest/globals');
const myRemove = require('./remove');

test('remove', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})
