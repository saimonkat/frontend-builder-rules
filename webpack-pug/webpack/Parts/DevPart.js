const {merge} = require('webpack-merge')
const BasicPart = require('./BasicPart')
const {dirs} = require('../Settings/Constants')

const devWebpackConfig = merge(BasicPart, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        static: dirs.dist,
        open: true,
        compress: true,
        watchFiles: dirs.src,
        port: 8081
    }
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})