/*
 *@Description webpack module、plugins等核心配置文件
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-07-18
 */
var webpack = require('webpack');
var undersore = require('underscore');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var entryPath = './web/views';
var widgetPath = './web/widget';
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//生产环境&开发环境基础配置项
//js入口文件 entris
var jsEntris = fs.readdirSync(entryPath).reduce(function(o, filename) {
    if (!/\./.test(filename)) {
        var _fd = entryPath + '/' + filename;
        fs.readdirSync(_fd).map(function(ifilename) {
            (/.entry.es$/.test(ifilename)) && (o[ifilename.replace('.entry.es', '')] = './' + path.join(entryPath, filename, ifilename));
        });
    }
    return o;
}, {});

var widgetPage = fs.readdirSync(widgetPath).reduce(function(o, filename) {
    if (!/\./.test(filename)) {
        var _fd = widgetPath + '/' + filename;
        fs.readdirSync(_fd).map(function(ifilename) {
            (/.html$/.test(ifilename)) && (o[ifilename.replace('.html', '')] = './' + path.join(entryPath, filename, ifilename));
        });
    }
    return o;
}, {});
// var jsVendors = {
//     'vendor': ['vue'] //第三方库
// };
var _entris = Object.assign(jsEntris
    //, jsVendors
 ),
    _module = {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.es$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            // loader: 'style!css?sourceMap!sass?sourceMap!import-glob'
            test: /\.less$/i,
            //loader: extractLESS.extract(['css', 'less'])
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }]
    },
    _resolve = {
        extensions: ["", ".vue", ".js", ".es", ".less"]
    },
    _babel = {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-vue-jsx', 'transform-runtime']
    };
    console.log(_entris);
var _devLoaders = undersore.clone(_module.loaders);
var _prodLoaders = undersore.clone(_module.loaders);
_devLoaders.push({
    test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg)$/,
    loader: 'file-loader?name=assets/images/[name].[ext]'
});
_prodLoaders.push({
    test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg)$/,
    loader: 'file-loader?name=assets/images/[name].[hash:5].[ext]'
});
var webpackConfig = {
    dev: {
        entry: _entris,
        module: {
            loaders: _devLoaders
        },
        resolve: _resolve,
        babel: _babel
    },
    prod: {
        entry: _entris,
        module: {
            loaders: _prodLoaders
        },
        resolve: _resolve,
        babel: _babel
    },
    TemplatePage:widgetPage
};

module.exports = webpackConfig;