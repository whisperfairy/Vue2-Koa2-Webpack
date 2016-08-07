/**
 *@Description 生产环境Webpack配置项
 */
var conf = require('./webpack.conf');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var options = {
    devtools: {
        dev: 'prod'
    },
    output: {
        path: './build/',
        publicPath: '/',
        filename: 'assets/scripts/[name].[chunkhash:5].bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            Vue: 'vue'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minify: {
                collapseWhitespace: true
            },
            filename: 'assets/scripts/[name].[chunkhash:5].bundle.js'
        }),
        new HtmlWebpackPlugin({
            template: './web/views/common/pages/layout.html',
            filename: './views/common/pages/layout.html',
            inject: false,
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './web/views/error/pages/404.html',
            filename: './views/error/pages/404.html',
            minify: {
                collapseWhitespace: true
            },
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './web/views/error/pages/500.html',
            filename: './views/error/pages/500.html',
            minify: {
                collapseWhitespace: true
            },
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './web/widget/header/header.html',
            filename: './widget/header/header.html',
            minify: {
                collapseWhitespace: true
            },
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './web/widget/footer/footer.html',
            filename: './widget/footer/footer.html',
            minify: {
                collapseWhitespace: true
            },
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './web/views/index/pages/index.js',
            filename: './views/index/pages/index.html',
            minify: {
                collapseWhitespace: true
            },
            inject: false,
            chunks: ['vendor', 'common', 'index-index']
        }),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("assets/styles/[name].[hash:5].css"),
    ]
}
var _options = Object.assign(options, conf.prod);
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
// module.exports.devtool = 'inline-source-map';