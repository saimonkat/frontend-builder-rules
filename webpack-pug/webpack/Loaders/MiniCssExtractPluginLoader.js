const MiniCssExtractPlugin = require("mini-css-extract-plugin").loader;

/**
 * MiniCssExtractPluginLoader
 *
 * @example
 *
 * @return {Object} loader конфиг лоадера
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/
 */
function loader() {
    return MiniCssExtractPlugin
}

module.exports = loader