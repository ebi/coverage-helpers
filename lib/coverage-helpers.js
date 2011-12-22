var instrument = require('./instrument.js');
var generate = require('./generate.js');

module.exports = {
	instrument: instrument.instrument,
	generateLcov: generate.generateLcov
};
