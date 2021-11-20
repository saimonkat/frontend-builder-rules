const {merge} = require('webpack-merge')
const BasicPart = require('./BasicPart')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const buildWebpackConfig = merge(BasicPart, {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserPlugin()
        ]
    }
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})