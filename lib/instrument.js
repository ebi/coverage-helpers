var fs = require('fs');
var burrito = require('burrito');

var COVERAGENAME = '_$Coverage';
var COVERAGEFUN = '_$ExecutedLine';

function defineVar(varName) {
    return 'if ("undefined" === typeof(' + varName + ')) { ' + varName + ' = {}; }\n';
}

module.exports = {
    /**
     * @param {Buffer} buffer The input buffer that needs instrumenting.
     * @param {String} filename The filename that is used for the reporting later on.
     * @returns {Buffer} The instrumented code.
     **/
    instrument: function (buffer, filename) {
        var string = buffer.toString('utf-8');
        var lines = [];
        var filenameArray = COVERAGENAME + '["' + filename + '"]';
        var wrappedString = burrito(string, function (node) {
            //From node-bunker
            switch (node.name) {
                case 'call':
                case 'binary':
                case 'unary-prefix':
                case 'unary-postfix':
                    lines.push(node.start.line + 1);
                    node.wrap(COVERAGEFUN + '("' + filename + '", ' + (node.start.line + 1) + ')(%s)');
                    break;
                case 'stat':
                case 'throw':
                case 'var':
                    lines.push(node.start.line + 1);
                    node.wrap('{' + COVERAGEFUN + '("' + filename + '", ' + (node.start.line + 1) + ');%s}');
                    break;
                default:
                    break;
            }

        });

        var finalString = defineVar(COVERAGENAME);
        finalString += defineVar(filenameArray);
        finalString += 'function ' + COVERAGEFUN + '(filename, line) { ' + COVERAGENAME + '[filename][line]++; return function (expr) { return expr };}';
        for (var i = 0; i < lines.length ;i++) {
            finalString += filenameArray + '[' + lines[i] + ']=0;\n';
        }
        finalString += wrappedString;
        return new Buffer(finalString, encoding='utf8');
    }
};
