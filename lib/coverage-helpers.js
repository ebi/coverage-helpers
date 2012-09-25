var instrument = require('./instrument.js');
var generate = require('./generate.js');

function combineResults () {
    var ret = {};
    for (var i = 0; i < arguments.length; i++) {
        var result = arguments[i];
        for (var file in result) {
            ret[file] = ret[file] || {};

            for (var line in result[file]) {
                var offset = ret[file][line] || 0;
                ret[file][line] = offset + result[file][line];
            }
        }
    }
    return ret;
}

module.exports = {
    combineResults: combineResults,
    instrument: instrument.instrument,
    generateLcov: generate.generateLcov,
    generateCobertura: generate.generateCobertura
};
