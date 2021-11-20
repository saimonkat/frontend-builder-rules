/**
 * Загрузчик Pug для webpack.
 *
 * @return {Object} Config
 * @see https://www.npmjs.com/package/pug-loader
 */

module.exports = {
    loader: 'simple-pug-loader',
    options: {
        pretty: true
    }
}