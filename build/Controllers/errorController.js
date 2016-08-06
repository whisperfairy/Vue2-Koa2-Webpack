/*
 *@Description 极客学院爬虫系统 错误处理 controller
 *@Author yuanzhijia@jikexueyuan.com
 *@Date 2015-5-26
 */
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorController = {
    error404: _regenerator2.default.mark(function error404() {
        return _regenerator2.default.wrap(function error404$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return this.render('error/404.html');

                    case 2:
                        this.body = _context.sent;

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, error404, this);
    }),
    error500: _regenerator2.default.mark(function error500() {
        return _regenerator2.default.wrap(function error500$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return this.render('error/500.html');

                    case 2:
                        this.body = _context2.sent;

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, error500, this);
    })
};
module.exports = errorController;