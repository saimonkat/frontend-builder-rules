const PugLoader = require("../Loaders/PugLoader");

module.exports = {
    test: /\.pug$/i,
    use: [
        PugLoader
    ],
}