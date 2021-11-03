const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

/**
 * Подробный JSdoc
 * @see https://www.npmjs.com/package/svg-sprite-loader
 */
module.exports = function createPlugin(options) {
    return new SpriteLoaderPlugin(options)
};