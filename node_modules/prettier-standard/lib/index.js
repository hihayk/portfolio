#!/usr/bin/env node
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (process.stdin.isTTY === true && cli.input.length < 1) {
              help();
            }

            return _context.abrupt('return', (0, _formatFiles2.default)(cli.input, cli.flags));

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _formatFiles = require('./format-files');

var _formatFiles2 = _interopRequireDefault(_formatFiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = (0, _meow2.default)('\n  Usage\n    $ prettier-standard [<glob>...]\n\n  Options\n    --log-level  Log level to use (default: warn)\n\n  Examples\n    $ prettier-standard \'src/**/*.js\'\n    $ echo "const {foo} = "bar";" | prettier-standard\n \n');

function help() {
  console.log(cli.help);
  process.exit(1);
}

main();