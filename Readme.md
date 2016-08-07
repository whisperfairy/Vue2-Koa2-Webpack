# Vue2+Webpack+Koa2    
## todos    
1.完成test文件夹集成karma  
2.完成wepack-dev的热对比  
## done 
1.gulp 编译 src koa2源代码 已全部由koa1迁移    
2.better-npm-run webpack:dev    
  所有资源并未进行压缩打包合并 开发阶段
3.better-npm-run webpack:prod
完成页面的全部压缩打包合并MD5
4.webAssetsHelp完成所有文件的分包    
## 文件结构
+++├── build                #后台程序发布目录    
++++++├──assets         #存放静态资源 webpack注入       
+++++++++├---images        #图片资源     
+++++++++├---scripts       #bundle common        
+++++++++├---styles        #bundle css common css        
++++++├----config          #后台配置信息 gulp注入  
++++++├----Controllers     #后台路由     gulp注入     
++++++├---Libs            #工具类     gulp注入     
++++++├----Logs            #日志文件夹          
++++++├----views           #swig模板视图 WebpackHtmlPlugin编译后文件夹 //TODO 待修改  
++++++├----widget          #前端swig组件 webpack注入//TODO 待修改             
++++++├----app.js          #程序入口   gulp注入            
+++├── config                #前端管理webpack配置信息  
+++├── src                  #后台程序开发目录  
++++++├----Controllers       #后台路由  
++++++├----Libs            #工具类          
++++++├---config         #后台配置
++++++├----app.es         #后台程序入口   
+++├──test   #测试文件夹├
+++└─ web  
++++++├──View        #入口文件  
+++++++++├──common #swig Layout布局  
+++++++++├──error  404 500页面  
+++++++++├──Index  目录文件  
++++++└──Widget   
+++++++++├──footer #VUE组件  
+++++++++├──Header #VUE组件  
+++├── node_modules        #包文件夹  
+++├── .gitignore     
+++├── .jshintrc      
+++├── webpack.config.js   #webpack入口文件  
+++└── gulpfile.js #gulp 配置文件
+++└── gulp-helper.js #gulp 帮助文件 
+++└── package.json  
    