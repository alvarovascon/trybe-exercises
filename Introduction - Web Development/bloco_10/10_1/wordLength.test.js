const { test, expect } = require('@jest/globals');
const wordLengths = require('./wordLength');

test('testa WL', () => {
  const words = ['sun', 'potato', 'roundabout', 'pizza'];
  const expected = [3, 6, 10, 5];
  expect(typeof wordLengths).toBe('function');
  expect(wordLengths(words)).toEqual(expected);
});
