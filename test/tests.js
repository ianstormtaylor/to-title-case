describe('to-title-case', function () {

var assert = require('assert');
var title = require('to-title-case');

it('the catcher in the rye', function () {
  assert('The Catcher in the Rye' == title('the catcher in the rye'));
});

});