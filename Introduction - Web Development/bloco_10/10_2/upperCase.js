const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('uppercase ola equals OLA', (done) => {
  uppercase('ola', (str) => {
    expect(str).toBe('OLA');
    done();
  });
});
