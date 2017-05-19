function fn (args = 'foot') {
    return args;
}
console.log(fn(), fn('root'));
const noop = () => {};
function api(callback = noop) {
    return new Promise((resolve, reject) => {
        const value = 'footbar';
        resolve(value);
        callback(null, value);
    });
}

const obj = {
    msg: 'world',
    greet(message = msg) {
        return `hello ${message}`;
    }
}

function foo(foo, ...args) {
    console.log(foo);
    console.log('args->', args.join(','));
}
foo(1,2,3,4);
function merge (target = {}, ...objs) {
    for(const obj of objs) {
        const keys = Object.keys(obj);
        debugger;
        for(const key of keys) {
            target[key] = obj[key];
        }
    }
    return target;
}
// merge({a:1},{b:2},{c:3});

//默认将把参数解构成数组
function sum(numbers) {
    debugger;
    console.log(numbers);
    // return numbers.reduce((a, b) => a+b);
}
//
// sum(...[1, 2, 3]);

var arrs = [1,2,3,3,3,3,3,4,5,6,67];
var set = new Set(arrs);
console.log(set);
//WeakSet
//

