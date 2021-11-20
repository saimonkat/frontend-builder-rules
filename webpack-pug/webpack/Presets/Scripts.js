const BabelLoader = require("../Loaders/BabelLoader");

module.exports = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
        BabelLoader
    ]
}