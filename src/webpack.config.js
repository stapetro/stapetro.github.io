const path = require('path');

module.exports = {
    entry: {
        pickLuck: './main/pickLuck.main.js'
    },
    output: {
        path: path.resolve(__dirname, '..', 'assets', 'js'),
        filename: '[name].js',
    },
    devtool: "source-map"
};