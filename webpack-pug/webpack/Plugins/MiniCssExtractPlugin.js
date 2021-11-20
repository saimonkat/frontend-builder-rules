const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Этот плагин извлекает CSS в отдельные файлы.
 *
 * Он создает файл CSS для каждого файла JS, который содержит CSS.
 * Он поддерживает загрузку CSS и SourceMaps по запросу.
 * Он основан на новой функции webpack v5 и требует для работы webpack 5.
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/
 */
module.exports = MiniCssExtractPlugin