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

// As described here https://github.com/babel/babel/issues/8407,
// Babel strips any empty lines when converting code to ASTs.
// To preserve empty lines, we need to convert code to CSTs
// (Concrete Syntax Trees), which isn't supported by Babel yet.
// !important:
// All test inputs and outputs must not contain empty lines
// lest our test cases will fail (False Negatives).