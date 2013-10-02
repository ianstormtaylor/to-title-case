
try {
  var escape = require('escape-regexp');
} catch (e) {
  var escape = require('escape-regexp-component');
}

var capital = require('to-capital-case');
var map = require('map');
var minors = require('title-case-minors');


/**
 * Expose `toTitleCase`.
 */

module.exports = toTitleCase;


/**
 * Minors.
 */

var escaped = map(minors, escape);
var minorMatcher = new RegExp('[^^]\\b(' + escaped.join('|') + ')\\b', 'ig');
var colonMatcher = /:\s*(\w)/g;


/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */


function toTitleCase (string) {
  return capital(string)
    .replace(minorMatcher, function (minor) {
      return minor.toLowerCase();
    })
    .replace(colonMatcher, function (letter) {
      return letter.toUpperCase();
    });
}