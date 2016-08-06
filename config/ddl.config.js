/**
 * Created by mason on 2016/7/29.
 */
const webpack = require('webpack');

const vendors = [
    'react',
    'react-dom',
    'antd'
];

module.exports = {
    output: {
        path: 'dist/js',
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};