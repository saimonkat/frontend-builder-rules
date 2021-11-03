module.exports = {
    test: /\.svg$/,
    use: [
        'svg-sprite-loader',
        'svg-transform-loader',
        'svgo-loader',
    ]
}
