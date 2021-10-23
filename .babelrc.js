const { plugin } = require("purgecss/node_modules/postcss");

module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        ['@babel/plugin-transform-runtime']
    ]
}