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
    },
    generateCobertura: function (executedLines) {
        var report = '';
        report += '<?xml version="1.0" ?>\n';
        report += '<!DOCTYPE coverage\n';
        report += '  SYSTEM \'http://cobertura.sourceforge.net/xml/coverage-03.dtd\'>\n';
        report += '<coverage branch-rate="0" line-rate="1" timestamp="1343299770569" version="3.5.2">\n';
        report += '  <packages>\n';
		report += '    <package branch-rate="0" complexity="0" line-rate="1" name="somepackage">\n';
        report += '      <classes>\n';
        for (var i in executedLines) {
            report += '        <class branch-rate="0" complexity="0" filename="';
            report += i + '" line-rate="1" name="main">\n';
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
