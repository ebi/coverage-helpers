if ("undefined" === typeof(_$Coverage)) { _$Coverage = {}; }
if ("undefined" === typeof(_$Coverage["../fixtures/nonInstrumented.js"])) { _$Coverage["../fixtures/nonInstrumented.js"] = {}; }
function _$ExecutedLine(filename, line) { _$Coverage[filename][line]++; return function (expr) { return expr };}_$Coverage["../fixtures/nonInstrumented.js"][1]=0;
_$Coverage["../fixtures/nonInstrumented.js"][3]=0;
_$Coverage["../fixtures/nonInstrumented.js"][4]=0;
_$Coverage["../fixtures/nonInstrumented.js"][4]=0;
_$Coverage["../fixtures/nonInstrumented.js"][5]=0;
_$Coverage["../fixtures/nonInstrumented.js"][6]=0;
_$Coverage["../fixtures/nonInstrumented.js"][7]=0;
_$Coverage["../fixtures/nonInstrumented.js"][7]=0;
_$Coverage["../fixtures/nonInstrumented.js"][9]=0;
_$Coverage["../fixtures/nonInstrumented.js"][15]=0;
_$Coverage["../fixtures/nonInstrumented.js"][20]=0;
_$Coverage["../fixtures/nonInstrumented.js"][26]=0;
_$Coverage["../fixtures/nonInstrumented.js"][26]=0;
_$Coverage["../fixtures/nonInstrumented.js"][27]=0;
_$Coverage["../fixtures/nonInstrumented.js"][30]=0;
_$Coverage["../fixtures/nonInstrumented.js"][32]=0;
_$Coverage["../fixtures/nonInstrumented.js"][33]=0;
_$Coverage["../fixtures/nonInstrumented.js"][35]=0;
{
    _$ExecutedLine("../fixtures/nonInstrumented.js", 1);
    var foo = bar;
}

{
    _$ExecutedLine("../fixtures/nonInstrumented.js", 3);
    var some = function(foo) {
        {
            _$ExecutedLine("../fixtures/nonInstrumented.js", 4);
            _$ExecutedLine("../fixtures/nonInstrumented.js", 4)(foo++);
        }
        if (_$ExecutedLine("../fixtures/nonInstrumented.js", 5)(foo > 3)) {
            {
                _$ExecutedLine("../fixtures/nonInstrumented.js", 6);
                var bar = foo;
            }
            {
                _$ExecutedLine("../fixtures/nonInstrumented.js", 7);
                _$ExecutedLine("../fixtures/nonInstrumented.js", 7)(foo++);
            }
        } else {
            {
                _$ExecutedLine("../fixtures/nonInstrumented.js", 9);
                foo += 2;
            }
        }
        return foo;
    };
}

function fooFunction(bla) {
    return _$ExecutedLine("../fixtures/nonInstrumented.js", 15)(bla + 1);
}

function nastyReturn(value) {
    if (_$ExecutedLine("../fixtures/nonInstrumented.js", 20)(0 === value)) {
        return null;
    }
    return value;
}

{
    _$ExecutedLine("../fixtures/nonInstrumented.js", 26);
    _$ExecutedLine("../fixtures/nonInstrumented.js", 26)(function() {
        {
            _$ExecutedLine("../fixtures/nonInstrumented.js", 27);
            var module = true;
        }
    }());
}

{
    _$ExecutedLine("../fixtures/nonInstrumented.js", 30);
    var someObject = {
        method: function(a, b) {
            if (_$ExecutedLine("../fixtures/nonInstrumented.js", 32)(a >= 0)) {
                return _$ExecutedLine("../fixtures/nonInstrumented.js", 33)(a + b);
            } else {
                return _$ExecutedLine("../fixtures/nonInstrumented.js", 35)(a - b);
            }
        }
    };
}
