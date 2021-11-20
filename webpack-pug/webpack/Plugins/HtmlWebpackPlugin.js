const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


class HtmlWebpackPluginConfig {
    dir = 'views/pages'

    getPlugins() {
        return fs.readdirSync(path.resolve('src', this.dir), "utf8")
            .map(item => {
                const parts = item.split('.')
                const name = parts[0]
                const extension = parts[1]

                return new HtmlWebpackPlugin({
                    filename: `${name}.html`,
                    inject: 'head',
                    title: "Webpack",
                    template: `${this.dir}/${name}.${extension}`,
                    minify: false
                })
            })
    }

    constructor(dir = 'views/pages') {
        this.dir = dir
        return this.getPlugins()
    }
}

module.exports = HtmlWebpackPluginConfig