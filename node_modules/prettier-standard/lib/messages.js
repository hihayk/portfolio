'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unchanged = exports.failure = exports.success = undefined;

var _messageformat = require('messageformat');

var _messageformat2 = _interopRequireDefault(_messageformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mf = new _messageformat2.default('en');

exports.success = success;
exports.failure = failure;
exports.unchanged = unchanged;


function success(data) {
  var files = '{count, plural, one{file} other{files}}';
  return mf.compile('{success} formatting {countString} ' + files + ' with prettier-standard')(data);
}

function failure(data) {
  var files = '{count, plural, one{file} other{files}}';
  return mf.compile('{failure} formatting {countString} ' + files + ' with prettier-standard')(data);
}

function unchanged(data) {
  var files = '{count, plural, one{file was} other{files were}}';
  return mf.compile('{countString} ' + files + ' {unchanged}')(data);
}