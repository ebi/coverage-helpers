if ("undefined" === typeof(_$Coverage)) { _$Coverage = {}; }
if ("undefined" === typeof(_$Coverage["undefined"])) { _$Coverage["undefined"] = {}; }
function _$ExecutedLine(filename, line) { _$Coverage[filename][line]++; return function (expr) { return expr };}_$Coverage["undefined"][0]=0;
_$Coverage["undefined"][2]=0;
_$Coverage["undefined"][3]=0;
_$Coverage["undefined"][3]=0;
_$Coverage["undefined"][11]=0;
_$Coverage["undefined"][11]=0;
_$Coverage["undefined"][12]=0;
{
    _$ExecutedLine("undefined", 0);
    var foo = bar;
}

{
    _$ExecutedLine("undefined", 2);
    var some = function(foo) {
        {
            _$ExecutedLine("undefined", 3);
            _$ExecutedLine("undefined", 3)(foo++);
        }
        return foo;
    };
}

function fooFunction(bla) {
    return bla;
}

{
    _$ExecutedLine("undefined", 11);
    _$ExecutedLine("undefined", 11)(function() {
        {
            _$ExecutedLine("undefined", 12);
            var module = true;
        }
    }());
}