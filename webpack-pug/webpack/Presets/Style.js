const SassLoader = require("../Loaders/SassLoader");
const PostcssLoader = require("../Loaders/PostcssLoader");
const CssLoader = require("../Loaders/CssLoader");
const MiniCssExtractPluginLoader = require("../Loaders/MiniCssExtractPluginLoader");

module.exports = {
    test: /\.(scss|css)$/,
    use: [
        MiniCssExtractPluginLoader,
        CssLoader,
        PostcssLoader,
        SassLoader
    ],
}