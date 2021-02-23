const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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

const fileName = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {

    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true,
            },
        }, 
        'css-loader',
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js'],
        other: './other.ts',
    },
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    // Если есть библиотеки подключаемые несколько раз, например,
    // одна и таже библиотека подключена к нескольким бандлам
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
    },
    devtool: isDev ? 'source-map' : '',
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { 
                from: path.resolve(__dirname, 'src/favicon.png'),
                to: path.resolve(__dirname, 'dist'),
            },
            { 
                from: path.resolve(__dirname, 'src/static'),
                to: path.resolve(__dirname, 'dist'),
            },
        ]),
        new MiniCssExtractPlugin({
            filename: fileName('css'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.scss$/,
                use: cssLoaders('sass-loader'),
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                        ]
                    },
                },
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                        ]
                    },
                },
            },
        ],
    },
};