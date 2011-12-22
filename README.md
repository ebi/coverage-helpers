# coverage-helpers
The prupose of this module is to provide helpers for node.js for instrumenting and generating lcov style reports.

## API

### instrument(buffer, "filename")
* `buffer` has to contain the code that you want to instrument.
* `filename` can be any string and will be used for the reporting.
* The return value is a `buffer` with the instrumented code

Executing the instrumented code will create and fill an object called **_$Coverage**. The contents will look like this:

    {
        filename: {
            linenumber: timesExecuted
        }
    }

#### Example

    var _$Coverage = {
        'someJsFile.js': {
            0: 1,
            2: 1,
            5: 3,
            7: 0
        }
    };

### generateLcov(executedLines)
* `exectuedLines` is normaly just **_$Coverage** but you can pass anything that follows it's format.
* The return value is a `string` that follows the LCOV Data style.
The output will look like this:

    SF:someJsFile  
    DA:0,1  
    DA:2,1  
    DA:5,3  
    DA:7,0  
    end_of_record

You can visualize this by saving this to a file and running `lcov -l coverage.dat` also `genhtml coverage.dat -o /tmp/report` will be your friend.

### combineResults(executedLines[, executedLines, …])
* `exectuedLines` is normaly just **_$Coverage** but you can pass anything that follows it's format.
* You can pass as many `executedLines` as you want to combine for example multiple clients.
* The return value is an `object` in the same format as **_$Coverage** but with all runs added up
