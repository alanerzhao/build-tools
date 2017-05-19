'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrays = ['aasdasd', 'b', 'cdef'];
var array = arrays.sort(function (a, b) {
    return a.length < b.length;
});
console.log(array);
function uname(a) {}
var obj = {
    hello: 'world',
    foo: function foo() {
        var _this = this;

        var bar = function bar() {
            return _this.hello;
        };
        return bar;
    }
};
window.hello = 'es5';
window.bar = obj.foo();
console.log(window.bar());
var DataCenter = (0, _freeze2.default)({
    baseUrl: 'xxxx',
    search: function search(query) {
        return fetch('xxx').then(function (res) {
            return resp.data;
        }).then(function (rows) {});
        then(function (data) {
            return fetch('aaaaaa?' + ids);
        });
    }
});

var dealy = (0, _freeze2.default)({
    baseUrl: 'xx',
    get: function get() {
        var promise = new _promise2.default();
    }
});

var ids = [1, 2, 3];
var obj1 = {};
var users = ids.map(function (id) {
    obj1['id_' + id] = id;
});
console.log(users, obj1);

function outter() {
    var innerVariable = 'footer';
    return function () {
        return innerVariable;
    };
}
var fn = outter();

console.log(fn());

var zootopia = [{ name: 'baozi', gender: '1' }, { name: 'baozi2', gender: '2' }];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = (0, _getIterator3.default)(zootopia), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref2 = _step.value;
        var name = _ref2.name,
            gender = _ref2.gender;

        console.log(name + '===>' + gender);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = (0, _getIterator3.default)(zootopia.entries()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        var _item = (0, _slicedToArray3.default)(item, 2),
            _item$ = _item[1],
            name = _item$.name,
            gender = _item$.gender;

        console.log(name);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}