const pluginTester = require('babel-plugin-tester').default;
const plugin = require('../src/index.js').default;
const path = require('path');

pluginTester({
    plugin: plugin,
    pluginName: 'babel-plugin-logical-optional-chaining',
    fixtures: path.resolve(__dirname, 'fixtures'),
    endOfLine: 'preserve',
    formatResult: r => r
});

// TODO: formatResult option is not preventing prettier from trimming down
// empty lines. Raise an issue.