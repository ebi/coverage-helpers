var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;
var coverageHelper = require("../../lib/coverage-helpers.js");

var result1 = {
    'someFile': {
        1: 3,
        5: 1
    },
    'anotherFile': {
        1: 3,
        2: 1,
        5: 1
    }
};

var result2 = {
    'someFile': {
        1: 5,
        5: 3
    },
    'anotherFile': {
        1: 1,
        2: 0,
        5: 999
    }
};

buster.testCase("Test combining results", {
    "Combine two identical runs": function () {
        var result = coverageHelper.combineResults(result1, result1);
        assert.equals({
            'someFile': {
                1: 6,
                5: 2
            },
            'anotherFile': {
                1: 6,
                2: 2,
                5: 2
            }
        }, result);
    },

    "Combine two different runs": function () {
        var result = coverageHelper.combineResults(result1, result2);
        assert.equals({
            'someFile': {
                1: 8,
                5: 4
            },
            'anotherFile': {
                1: 4,
                2: 1,
                5: 1000
            }
        }, result);
    },

    "Combine multiple runs": function () {
        var result = coverageHelper.combineResults(result1, result1, result2);
        assert.equals({
            'someFile': {
                1: 11,
                5: 5
            },
            'anotherFile': {
                1: 7,
                2: 2,
                5: 1001
            }
        }, result);
    },

    "Combine very diffrent reuns": function () {
        var result = coverageHelper.combineResults({
                'someFile': {},
                'anotherFile': {
                    0: 1,
                    1: 2
                }
            }, {
                'anotherFile': {
                    0: 5,
                    1: 0
                },
                'yetAnotherFile': {
                    0: 1,
                    1: 5
                }
        });

        assert.equals({
            'someFile': {},
            'anotherFile': {
                0: 6,
                1: 2
            },
            'yetAnotherFile': {
                0: 1,
                1: 5
            }
        }, result);
    }
});
