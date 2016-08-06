//应用配置文件
var path = require('path');
var local = require('./local');
var _ = require('underscore');
var config = {
    "title": "极客学院爬虫系统",
    //默认生产环境
    "env": "production",
    "appName": "jkxySpider",
    //端口号配置
    "port": 3000,
    //模板所在的目录
    "viewDir": path.join(__dirname, '..', 'views'),
    //log所在的目录
    "logDir": path.join(__dirname, '..', 'logs'),
    //静态文件所在的目录
    "staticDir": path.join(__dirname, '..')
};
//当NODE_ENV环境变量值为local时
//本地调试环境
if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development') {
    config = _.extend(config, local);
}

module.exports = config;