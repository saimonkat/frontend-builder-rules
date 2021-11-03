const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Подробный JSdoc
 * @param {Object} options
 * @see ссылка на доки
 */
module.exports = function createPlugin(options) {
    return new MiniCssExtractPlugin(options)
};