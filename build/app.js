/*
 *@Description 一灯学堂学员学习系统
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-07-18
 */
'use strict';

var Koa = require('koa');
var convert = require('koa-convert'); //koa1 转换器
var errorHandler = require('./Libs/errorHandler');
var serve = require('koa-static');
var router = require('koa-simple-router');
var path = require('path');
var config = require('./config/config');
var controllers = require('./Controllers/controllerInit');
var app = new Koa();
var views = require('koa-views');
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