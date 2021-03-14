const merge = require('webpack-merge');
const path = require('path');

Object.assign(process.env, {
    WEBPACK_SOURCE_DIR: path.resolve(__dirname, 'src'),
    WEBPACK_BUILD_DIR: path.resolve(__dirname, 'dist'),
    WEBPACK_FAVICON_PNG: path.resolve(__dirname, 'src/favicon.png'),
    WEBPACK_STATIC_DIR: path.resolve(__dirname, 'src/static'),
});

module.exports = (env, argv) => {

    const mode = argv && argv.mode || 'development';
    process.env.NODE_ENV = mode;

    const configs = [
        require('./webpack/config-base'),
        require('./webpack/config-optimization'),
    ];

    return merge({mode}, ...configs);
};