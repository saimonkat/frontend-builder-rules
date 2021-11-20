const SvgoLoader = require("../Loaders/SvgoLoader");
const SvgTransformLoader = require("../Loaders/SvgTransformLoader");
const SvgSpriteLoader = require("../Loaders/SvgSpriteLoader");

module.exports = {
    test: /\.svg$/,
    use: [
        SvgSpriteLoader,
        SvgTransformLoader,
        SvgoLoader,
    ]
}
