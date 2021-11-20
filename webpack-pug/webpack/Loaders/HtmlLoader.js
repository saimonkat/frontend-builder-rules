/**
 * Экспортирует HTML как строку. HTML минимизируется, когда этого требует компилятор.
 *
 * @param {Object} options
 * @return {Object} Config
 * @see https://webpack.js.org/loaders/html-loader/
 */
function loader(options = {}) {
    return {
        loader: "html-loader",
        options: options
    }
}

module.exports = loader