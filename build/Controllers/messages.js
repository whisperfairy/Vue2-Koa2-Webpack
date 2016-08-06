'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var views = require('co-views');
var parse = require('co-body');
var messages = [{ id: 0, message: 'Koa next generation web framework for node.js' }, { id: 1, message: 'Koa is a new web framework designed by the team behind Express' }];

var render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.home = _regenerator2.default.mark(function home() {
  return _regenerator2.default.wrap(function home$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return render('list', { 'messages': messages });

        case 2:
          this.body = _context.sent;

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, home, this);
});

module.exports.list = _regenerator2.default.mark(function list() {
  return _regenerator2.default.wrap(function list$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return messages;

        case 2:
          this.body = _context2.sent;

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, list, this);
});

module.exports.fetch = _regenerator2.default.mark(function fetch(id) {
  var message;
  return _regenerator2.default.wrap(function fetch$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          message = messages[id];

          if (!message) {
            this.throw(404, 'message with id = ' + id + ' was not found');
          }
          _context3.next = 4;
          return message;

        case 4:
          this.body = _context3.sent;

        case 5:
        case 'end':
          return _context3.stop();
      }
    }
  }, fetch, this);
});

module.exports.create = _regenerator2.default.mark(function create() {
  var message, id;
  return _regenerator2.default.wrap(function create$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return parse(this);

        case 2:
          message = _context4.sent;
          id = messages.push(message) - 1;

          message.id = id;
          this.redirect('/');

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, create, this);
});

function doSomeAsync() {
  return function (callback) {
    setTimeout(function () {
      callback(null, 'this was loaded asynchronously and it took 3 seconds to complete');
    }, 3000);
  };
}

// One way to deal with asynchronous call
module.exports.delay = _regenerator2.default.mark(function delay() {
  return _regenerator2.default.wrap(function delay$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return doSomeAsync();

        case 2:
          this.body = _context5.sent;

        case 3:
        case 'end':
          return _context5.stop();
      }
    }
  }, delay, this);
});