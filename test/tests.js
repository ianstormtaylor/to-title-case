describe('to-title-case', function () {

var assert = require('assert');
var title = require('to-title-case');

it('shouldnt touch title case', function () {
  assert('A Title: Case of String' == title('A Title: Case of String'));
});

it('should convert space case', function () {
  assert('A Space Case of String' == title('a space case of string'));
});

it('should convert camel case', function () {
  assert('A Camel Case of String' == title('aCamelCaseOfString'));
});

it('should convert snake case', function () {
  assert('A Snake Case of String' == title('a_snake_case_of_string'));
});

it('should convert dot case', function () {
  assert('A Dot Case of String' == title('a.dot.case.of.string'));
});

it('should convert constant case', function () {
  assert('A Constant Case of String' == title('A_CONSTANT_CASE_OF_STRING'));
});

it('should convert "the lord of the flies"', function () {
  assert('The Lord of the Flies' == title('the lord of the flies'));
});

it('should convert "a tale of two cities"', function () {
  assert('A Tale of Two Cities' == title('a tale of two cities'));
});

it('should convert "the lion, the witch and the wardrobe"', function () {
  assert('The Lion, the Witch and the Wardrobe' == title('the lion, the witch and the wardrobe'));
});

it('should convert "she: a history of adventure"', function () {
  assert('She: A History of Adventure' == title('she: a history of adventure'));
});

});