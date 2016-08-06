/*
 *@Description基础请求类
 *@Date 2015-04-06
 *@Author yuanzhijia@jikexueyuan.com
 */
'use strict';
let request = require('request');
class SafeRequest {
    constructor(params) {
        this.callback = params.success;
        this.logger = params.logger;
        this.errCallback = params.error;
        this.reqOptions = {
            url: params.url,
            // method: '',
            // json: true,
            //timeout: 10000
        }
    }
    request() {
        var me = this;
        request(me.reqOptions, function(err, res, body) {
            let _body = {
                msg: "服务器错误！"
            }
            if (err) {
                let reqInfo = JSON.stringify(me.reqOptions, null, 4);
                if (err.code === 'ETIMEDOUT') {
                    console.error(err + ', fail to request api: ' + reqInfo);
                    me.logger.error(new Error(err + ', fail to request api: ' + reqInfo));
                }
            } else if (!body && res && res.statusCode === 200) {
                console.warn('Http no error, statusCode: 200, no body.');
                me.logger.error(new Error('Http no error, statusCode: 200, no body.'));
            }
            try {
                if (body) { //当body为字符串的时候request并不会传递err。
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
}
//声明工厂 传递构造函数
let _safeFactory = function(params) {
    let _safe = new SafeRequest(params);
    _safe.request();
};
// //导出类的实例化
module.exports = _safeFactory;