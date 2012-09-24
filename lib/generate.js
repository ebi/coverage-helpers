var fs = require('fs');

function getNameFromPath (path) {
    var p = require("path");
    return p.basename(path, p.extname(path));
}

function getPackageFromPath (path) {
    var p = require("path");
    return p.dirname(path).replace(/\//g, '.');
}

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
    },
    generateCobertura: function (executedLines) {
        var totalLines = 0;
        var totalTouchedLines = 0;
        var touchedLines = {};
        for (var i in executedLines) {
            touchedLines[i] = 0;
            for (var j in executedLines[i]) {
                totalLines += 1;
                if (executedLines[i][j] > 0) {
                    totalTouchedLines += 1;
                    touchedLines[i] += 1;
                }
            }
        }
        var report = '';
        report += '<?xml version="1.0" ?>\n';
        report += '<!DOCTYPE coverage\n';
        report += '  SYSTEM \'http://cobertura.sourceforge.net/xml/coverage-03.dtd\'>\n';
        report += '<coverage branch-rate="0" line-rate="';
        report += totalTouchedLines / totalLines;
        report += '" timestamp="';
        report += Math.round(Date.now() / 1000);
        report += '" version="3.5.2">\n';
        report += '  <packages>\n';
		report += '    <package branch-rate="0" complexity="0" line-rate="';
        report += totalTouchedLines / totalLines;
        report += '" name="' + getPackageFromPath(i) + '">\n';
        report += '      <classes>\n';
        for (var i in executedLines) {
            report += '        <class branch-rate="0" complexity="0" filename="';
            report += i + '" line-rate="';
            report += touchedLines[i] / Object.keys(executedLines[i]).length;
            report += '" name="' + getNameFromPath(i) + '">\n';
            report += '          <methods/>\n';
            report += '          <lines>\n';
            for (var j in executedLines[i]) {
                report += '            <line hits="' + executedLines[i][j];
                report += '" number="' + j + '"/>\n';
            }
            report += '          </lines>\n';
            report += '        </class>\n';
        }
        report += '      </classes>\n';
        report += '    </package>\n';
        report += '  </packages>\n';
        report += '</coverage>\n';
        return report;
    }
};
