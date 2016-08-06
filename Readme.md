一灯学堂学习系统 
todos
1.完成web views文件夹的自动遍历
2.完成test文件夹集成karma
3.完成wepack-dev的热对比
done
1.gulp 编译 src koa2源代码 已全部由koa1迁移
2.better-npm-run webpack:dev
所有资源并未进行压缩打包合并 开发阶段
better-npm-run webpack:prod
完成页面的全部压缩打包合并MD5

3.webAssetsHelp完成所有文件的分包
// ├── build                #后台程序发布目录  
           ├──assets           #存放静态资源  
               ---images        #图片资源
               ---scripts       #bundle common
               ---styles        #bundle css common css
           |----config          #后台配置信息  
           |----Controllers     #后台路由          
           |----Libs            #工具类          
           |----Logs            #日志文件夹          
           |----views           #swig模板视图 WebpackHtmlPlugin编译后文件夹 //TODO 待修改
           |----widget          #前端swig组件 //TODO 待修改             
           |----app.js          #程序入口              
   ├── config                #前端管理webpack配置信息  
   ├── src                  #后台程序开发目录  
|          |----Controllers       #后台路由  
|   |      |----Libs            #工具类          
          
|   |       ├──images       #存放图片资源文件  
|   |       └──styles       #存放全局sass变量文件和reset文件  
|       ├──lib  
|   |   ├──components   #存放数据 模块组件 文件  
|   |   |   └──Header  
|   |   |       ├──Header.jsx  
|   |   |       └──Header.scss  
|   |   |     
|   |   └──utils        #存放utils工具函数文件  
|   |  
|       └──views  
|           ├──Index        #入口文件  
|       |      ├──Index.html #html文件  
|       |      ├──Index.jsx  入口文件  
|       |      └──Index.scss  
|          └──Index2  
   
   ├── node_modules        #包文件夹  
   ├── .gitignore     
   ├── .jshintrc      
   ├── webpack.config.js   #webpack配置文件  
   └── package.json  
