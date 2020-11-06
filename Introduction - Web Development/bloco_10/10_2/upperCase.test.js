const uppercase = require('./upperCase');

test('uppercase ola equals OLA', (done) => {
  uppercase('ola', (str) => {
    expect(str).toBe('OLA');
    done();
  });
});
