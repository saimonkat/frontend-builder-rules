/**
 * html-loader
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 * @see https://webpack.js.org/loaders/html-loader/
 */
function loader(options = {}) {
    return {
        loader: "html-loader",
        options: options
    }
}

module.exports = loader