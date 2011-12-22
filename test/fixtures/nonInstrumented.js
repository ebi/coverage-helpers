var foo = bar;

var some = function (foo) {
    foo++;
    if (foo > 3) {
        var bar = foo;
        foo++;
    } else {
        foo += 2;
    }
    return foo;
};

function fooFunction(bla) {
    return bla + 1;
}

//TODO: See how we can nicely wrap this
function nastyReturn(value) {
    if (0 === value) {
        return null;
    }
    return value;
}

(function () {
    var module = true;
})();

var someObject = {
    method: function (a, b) {
        if (a >= 0) {
            return a + b;
        } else {
            return a - b;
        }
    }
};
