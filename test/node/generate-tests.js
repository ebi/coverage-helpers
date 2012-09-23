var fs = require("fs");
var path = require("path");
var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;
var coverageHelper = require("../../lib/coverage-helpers.js");

buster.assertions.add("coverageData", {
    assert: function (fixtureFile, coverageString) {
        return fs.readFileSync(path.join(__dirname, fixtureFile)) == coverageString;
    },
    assertMessage: "Expected the contents of ${0} to be the equal to ${1}"
});

buster.testCase("Test generating the coverage configuration", {
    "Test that a simple run with one file executed get's generated correctly": function () {
        Date.now = this.stub().returns(1234567890000);
        var coverage = {
            '/some/example/file.js': {
                3: 0,
                5: 1,
                100: 5,
                200: 0
            }
        };
        assert.coverageData("../fixtures/simple.dat", coverageHelper.generateLcov(coverage));
        assert.coverageData("../fixtures/simple.xml", coverageHelper.generateCobertura(coverage));
    },

    "Test a generation with multiple files": function () {
        Date.now = this.stub().returns(1234567890000);
        var coverage = {
            '/some/file.js': {
                3: 0,
                5: 1
            },
            'some/otherfile.js': {
                100: 1,
                300: 2
            }
        };
        assert.coverageData("../fixtures/multiple.dat", coverageHelper.generateLcov(coverage));
        assert.coverageData("../fixtures/multiple.xml", coverageHelper.generateCobertura(coverage));
    }
});
