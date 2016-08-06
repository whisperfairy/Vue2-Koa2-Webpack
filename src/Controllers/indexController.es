/*
 *@Description 一灯学堂学习系统主路由
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-07-19
 */
'use strict';
const data = {
    title: "一灯学堂学员学习系统",
    content: "Hello World"
};
let indexController = {
    index() {
        return async(ctx, next) => {
            await ctx.render('index/pages/index.html', {
                data: data
            });
        }
    },
    home() {
        return async(ctx, next) => {
            ctx.body = 123;
        }
    }
};
module.exports = indexController;