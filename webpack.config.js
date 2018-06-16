var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './assets/javascript/script.js',
    output: {
        path: path.resolve(__dirname, "assets", "javascript", "bundle"),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};
