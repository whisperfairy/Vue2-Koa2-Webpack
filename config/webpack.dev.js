/**
 *@Description 开发环境Webpack配置项
 */
var conf = require('./webpack.conf');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var options = {
    devtools: {
        dev: 'dev'
    },
    output: {
        path: './build/',
        publicPath: '/',
        filename: 'assets/scripts/[name].bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            Vue: 'vue'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'assets/scripts/[name].bundle.js'
        }),
        new HtmlWebpackPlugin({
            template: './web/views/common/pages/layout.html',
            filename: './views/common/pages/layout.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './web/views/error/pages/404.html',
            filename: './views/error/pages/404.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './web/views/error/pages/500.html',
            filename: './views/error/pages/500.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './web/views/index/pages/index.js',
            filename: './views/index/pages/index.html',
            inject: false,
            chunks: ['vendor', 'common', 'index-index']
        }),
        new ExtractTextPlugin("assets/styles/[name].css"),
    ]
};
var _options = Object.assign(options, conf.dev);
for (var i in conf.TemplatePage)
{
      _options.plugins.push(
          new HtmlWebpackPlugin({
              template: conf.TemplatePage[i],
              filename: './widget/'+i+'/'+i+'.html',
              minify: {
                  collapseWhitespace: true
              },
              inject: false
          })
      )
};

module.exports = _options;