const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {

    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin(),
        ];
    }

    return config;
};

module.exports = {
    // Если есть библиотеки подключаемые несколько раз, например,
    // одна и таже библиотека подключена к нескольким бандлам
    optimization: optimization(),
};