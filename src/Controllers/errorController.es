/*
 *@Description 极客学院爬虫系统 错误处理 controller
 *@Author yuanzhijia@jikexueyuan.com
 *@Date 2015-5-26
 */
'use strict';
let errorController = { * error404() {
        this.body = yield this.render('error/404.html');
    }, * error500() {
        this.body = yield this.render('error/500.html');
    }
};
module.exports = errorController;