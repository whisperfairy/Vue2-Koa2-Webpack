/*
 *@Description 极客学院爬虫系统 慕课网 model
 *@Author yuanzhijia@jikexueyuan.com
 *@Date 2015-5-26
 */
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorHandler = {
    error: function error(app) {
        var _this = this;

        app.use(function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return next();

                            case 2:
                                if (!(404 != ctx.status)) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 4:
                                console.log(ctx.url, '404页面');
                                ctx.status = 404;
                                _context.next = 8;
                                return ctx.render('error/pages/404');

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
        app.use(function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return next();

                            case 3:
                                _context2.next = 11;
                                break;

                            case 5:
                                _context2.prev = 5;
                                _context2.t0 = _context2['catch'](0);

                                console.error(new Error(_context2.t0));
                                ctx.status = _context2.t0.status || 500;
                                _context2.next = 11;
                                return ctx.render('error/pages/500');

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this, [[0, 5]]);
            }));

            return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
            };
        }());
    }
};
module.exports = errorHandler;