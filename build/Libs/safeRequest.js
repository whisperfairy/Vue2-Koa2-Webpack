/*
 *@Description基础请求类
 *@Date 2015-04-06
 *@Author yuanzhijia@jikexueyuan.com
 */
'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _request = require('request');

var SafeRequest = function () {
    function SafeRequest(params) {
        (0, _classCallCheck3.default)(this, SafeRequest);

        this.callback = params.success;
        this.logger = params.logger;
        this.errCallback = params.error;
        this.reqOptions = {
            url: params.url
        };
    }

    (0, _createClass3.default)(SafeRequest, [{
        key: 'request',
        value: function request() {
            var me = this;
            _request(me.reqOptions, function (err, res, body) {
                var _body = {
                    msg: "服务器错误！"
                };
                if (err) {
                    var reqInfo = (0, _stringify2.default)(me.reqOptions, null, 4);
                    if (err.code === 'ETIMEDOUT') {
                        console.error(err + ', fail to request api: ' + reqInfo);
                        me.logger.error(new Error(err + ', fail to request api: ' + reqInfo));
                    }
                } else if (!body && res && res.statusCode === 200) {
                    console.warn('Http no error, statusCode: 200, no body.');
                    me.logger.error(new Error('Http no error, statusCode: 200, no body.'));
                }
                try {
                    if (body) {
                        //当body为字符串的时候request并不会传递err。
                        _body = body;
                        me.callback(err, res, _body);
                    } else {
                        me.callback(new Error('Fail to parse http response , url:' + me.reqOptions.url), res, _body);
                    }
                } catch (e) {
                    console.error('Request Callback Error: ' + me.reqOptions.url, e);
                    me.logger.http('Request Callback Error:' + me.reqOptions.url, e);
                    me.errCallback && me.errCallback(e, res, _body);
                }
            });
        }
    }]);
    return SafeRequest;
}();
//声明工厂 传递构造函数


var _safeFactory = function _safeFactory(params) {
    var _safe = new SafeRequest(params);
    _safe.request();
};
// //导出类的实例化
module.exports = _safeFactory;