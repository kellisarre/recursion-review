// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {
    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      /* START SOLUTION */
      expect(result).to.equal(expected);
      /* ELSE
      expect(result).to.equal(FILL_ME_IN);
      END SOLUTION */
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      /* START SOLUTION */
      expect(result).to.equal(expected);
      /* ELSE
      expect(result).to.equal(FILL_ME_IN);
      END SOLUTION */
    });
  });
});
