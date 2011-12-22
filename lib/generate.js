var fs = require('fs');

module.exports = {
    generateLcov: function (executedLines) {
        var report = '';
        for (var i in executedLines) {
            report += 'SF:' + i + '\n';
            for (var j in executedLines[i]) {
                report+= 'DA:' + j + ',' + executedLines[i][j] + '\n';
            }
            report += 'end_of_record\n';
        }
        return report;
    }
};
