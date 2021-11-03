const { merge } = require('webpack-merge')
const BasicPart = require('./BasicPart')

const buildWebpackConfig = merge(BasicPart, {
    mode: 'production'
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})