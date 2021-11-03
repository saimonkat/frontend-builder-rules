const {CleanWebpackPlugin} = require("clean-webpack-plugin");

/**
 * Подробный JSdoc
 * @param {Object} options
 * @see ссылка на доки
 */
module.exports = function createPlugin(options) {
    return new CleanWebpackPlugin(options)
};