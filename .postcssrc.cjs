const cssnanoPlugin = require('cssnano');
const mqpacker = require('css-mqpacker');
const calc = require('postcss-calc');
const presetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        presetEnv({ stage: 2 }),
        mqpacker({ sort: true }),
        calc({ precision: 3 }),
        cssnanoPlugin({ preset: 'default' })
    ],
    modules: true
};
