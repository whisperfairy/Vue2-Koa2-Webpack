/*
 *@Description 一灯学堂学员学习系统
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-07-18
 */
'use strict';
let Koa = require('koa');
let convert = require('koa-convert'); //koa1 转换器
let errorHandler = require('./Libs/errorHandler');
let serve = require('koa-static');
let router = require('koa-simple-router');
let path = require('path');
let config = require('./config/config');
let controllers = require('./Controllers/controllerInit');
let app = new Koa();
let views = require('koa-views');
app.use(views(config.viewDir, {
    map: {
        html: 'swig'
    }
}));
errorHandler.error(app); //处理事件句柄
controllers.getAllrouters(app, router); //初始化controllers
app.use(convert(serve(config.staticDir))); // 静态资源文件
//监听端口🐂😊
app.listen(config.port);
console.log('ydxtLearnSystem listening on port %s', config.port);