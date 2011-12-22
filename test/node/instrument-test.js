var fs = require("fs");
var path = require("path");
var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;
var coverageHelper = require("../../lib/coverage-helpers.js");

buster.assertions.add("instrumentFile", {
    assert: function (fixtureFile, coverageString) {
        var expectedString = fs.readFileSync(path.join(__dirname, fixtureFile)).toString().trim();
        coverageString = coverageString.toString().trim();
        return expectedString == coverageString;
    },
    assertMessage: "Expected the contents of ${0} to be the equal to ${1}"
});

buster.testCase("Test Instrumenting", {
    "instrumenting a complicated js file": function () {
        var jsBuffer = fs.readFileSync(path.join(__dirname, "../fixtures/nonInstrumented.js"));
        assert.instrumentFile("../fixtures/instrumented.js", coverageHelper.instrument(jsBuffer, "../fixtures/nonInstrumented.js"));
    }
});
