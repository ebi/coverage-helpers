var instrument = require('./instrument.js');
var generate = require('./generate.js');

function combineResults () {
	
}

module.exports = {
	combineResults: combineResults,
	instrument: instrument.instrument,
	generateLcov: generate.generateLcov
};
