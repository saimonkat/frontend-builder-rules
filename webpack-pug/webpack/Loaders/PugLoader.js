/**
 * pug-loader
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 * @see https://www.npmjs.com/package/handlebars-loader
 */
function loader(options = {}) {
    return {
        loader: 'pug-loader',
        options: options
    }
}

module.exports = loader