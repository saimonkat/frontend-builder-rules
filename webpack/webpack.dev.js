const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {

    return merge(common(argv.mode), {
        devtool: 'inline-source-map',
        // devtool: 'inline-cheap-module-source-map',
        devServer: {
            // contentBase: './dist',
            contentBase: path.join(__dirname, 'dist'),
            overlay: {
                warnings: true,
                errors: true,
            },
            port: 3000,
            // hot: true,
            liveReload: true
            // writeToDisk: true,
        },
        watchOptions: {
            aggregateTimeout: 100,
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: true,
                                reloadAll: true,
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                url: false,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    indentWidth: 4,
                                    outputStyle: 'compressed',
                                    // outputStyle: 'expanded',
                                },
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [
                        // 'style-loader',
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: true,
                                reloadAll: true,
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                url: false,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                    ],
                }
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/style.css',
            }),
            // new webpack.SourceMapDevToolPlugin({
            //     filename: "[file].map"
            // }),
        ],
    });
};