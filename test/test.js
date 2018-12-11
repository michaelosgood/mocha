var assert = require('assert');
// Passing Test Example
describe('TestGroupOne', function() {
  describe('SubTestGroupA', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [81,82].indexOf(4));
    });
  });
});
// Failing Test Example
describe('TestGroupOne', function() {
    describe('SubTestGroupB', function() {
      it('should return -1 when the value is not present', function(){
        assert.equal(0, [81,82].indexOf(4));
      });
    });
  });

  // Math Tests
describe('Math', function() {
    // Test One
    describe('Test One:', function() {
      it('should pass if test if 3 * 3 = 9', function(){
        assert.equal(9, 3*3);
      });
    });
    // Test Two
    describe('Test Two:', function() {
      it('should pass if  test if (3–4)*8 = -8', function(){
        assert.equal(-8, (3-4)*8);
      });
    });
});