/**
 * Created by mason on 2016/7/29.
 */
const webpack = require('webpack');

const vendors = [
    'vue'
    ];

module.exports = {
    output: {
        path: './build/assets/scripts',
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "vendor": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};