var assert = require('chai').assert;
var forEachFunction = require('../lib/for-each')

describe('forEachFunction', function () {

  it('should capitalize each string in the array', function () {
    var favoriteColors = [
      'Red',
      'Green',
      'Blue',
      'Yellow'
    ];

    assert.deepEqual(favoriteColors, ['RED', 'GREEN', 'BLUE', 'YELLOW']);
  });
});
