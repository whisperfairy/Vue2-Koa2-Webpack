/*
 *@Description 极客学院爬虫系统 慕课网 model
 *@Author yuanzhijia@jikexueyuan.com
 *@Date 2015-5-26
 */
'use strict';
let errorHandler = {
    error(app) {
        app.use(async(ctx, next) => {
            await next();
            if (404 != ctx.status) return;
            console.log(ctx.url, '404页面');
            ctx.status = 404;
            await ctx.render('error/pages/404');
        });
        app.use(async(ctx, next) => {
            try {
                await next();
            } catch (err) {
                console.error(new Error(err));
                ctx.status = err.status || 500;
                await ctx.render('error/pages/500');
            }
        });
    }
};
module.exports = errorHandler;