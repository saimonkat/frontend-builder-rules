const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (dir = path.join("src", "assets", "templates", "pages")) => {
    return fs.readdirSync(dir, "utf8")
        .map(item => {
            const parts = item.split('.')
            const name = parts[0]
            const extension = parts[1]

            return new HtmlWebpackPlugin({
                filename: `${name}.html`,
                inject: 'head',
                title: "Webpack",
                template: `!!pug-loader!${dir}/${name}.${extension}`,
                minimize: false
            })
        })
}