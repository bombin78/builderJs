const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const {
    WEBPACK_SOURCE_DIR,
    WEBPACK_BUILD_DIR,
    WEBPACK_STATIC_DIR,
    WEBPACK_FAVICON_PNG,
} = process.env;

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

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

const babelOptions = preset => {

    const opts = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
        ]
    };

    if (preset) {
        opts.presets.push(preset);
    }

    return opts;
};

const plugins = () => {

    const base = [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { 
                from: WEBPACK_FAVICON_PNG,
                to: WEBPACK_BUILD_DIR,
            },
            { 
                from: WEBPACK_STATIC_DIR,
                to: WEBPACK_BUILD_DIR,
            },
        ]),
        new MiniCssExtractPlugin({
            filename: fileName('css'),
        }),
    ];

    if (isProd) {
        base.push(new BundleAnalyzerPlugin);
    }

    return base;
};

const config = {
    context: WEBPACK_SOURCE_DIR,
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js', './raw.js'],
        other: './other.ts',
    },
    output: {
        filename: fileName('js'),
        path: WEBPACK_BUILD_DIR,
    },
    resolve: {
        alias: {
            '@': WEBPACK_SOURCE_DIR,
        },
    },
    devServer: {
        port: 4200,
        hot: isDev,
    },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
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
                    options: babelOptions(),
                },
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript'),
                },
            },
        ],
    },
};

module.exports = config;