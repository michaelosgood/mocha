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