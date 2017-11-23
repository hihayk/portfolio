'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _messages = require('./messages');

var messages = _interopRequireWildcard(_messages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tests = {
  success: [{
    input: { success: 'success', count: 1, countString: '1String' },
    output: 'success formatting 1String file with prettier-standard'
  }, {
    input: { success: 'success', count: 3, countString: '3String' },
    output: 'success formatting 3String files with prettier-standard'
  }],
  failure: [{
    input: { failure: 'failure', count: 1, countString: '1String' },
    output: 'failure formatting 1String file with prettier-standard'
  }, {
    input: { failure: 'failure', count: 3, countString: '3String' },
    output: 'failure formatting 3String files with prettier-standard'
  }],
  unchanged: [{
    input: { unchanged: 'unchanged', count: 1, countString: '1String' },
    output: '1String file was unchanged'
  }, {
    input: { unchanged: 'unchanged', count: 3, countString: '3String' },
    output: '3String files were unchanged'
  }]
}; /* eslint import/namespace: [2, { allowComputed: true }] */


(0, _keys2.default)(tests).forEach(function (messageKey) {
  tests[messageKey].forEach(function (_ref) {
    var input = _ref.input,
        output = _ref.output;

    test(messageKey + ' ' + (0, _stringify2.default)(input), function () {
      expect(messages[messageKey](input)).toEqual(output);
    });
  });
});