// const test = '123';
// // const Obj = {
    // // test
// // };
// var result = [1, 2, 3].filter(x => x > 2);
// var resultOne = foo => 2 + 1;
// const resultThree = x => x+1;
// //立即执行函数
// console.log((item => item + 2)(3));
// //匿名函数而以
// cc => 1;
// console.log(result);
// console.log(resultOne);
// var resultParas = [3,4,5].filter((item, index) => item+index);
// console.log(resultParas);


let arrays = ['aasdasd', 'b', 'cdef'];
const array = arrays.sort((a, b) => a.length < b.length);
console.log(array);
function uname (a) {
    
}
const obj = {
    hello: 'world',
    foo() {
        const bar = () => this.hello;
        return bar;
    }
}
window.hello = 'es5';
window.bar = obj.foo();
console.log(window.bar());
const DataCenter = Object.freeze({
    baseUrl: 'xxxx',
    search(query) {
        return fetch('xxx')
        .then(res => resp.data)
        .then(rows => {
            // TODO
        })
        then(data => fetch(`aaaaaa?${ids}`))
    }
})


const dealy = Object.freeze({
    baseUrl:'xx',
    get() {
        var promise = new Promise();


    }
})

var ids = [1, 2, 3];
var obj1 = {};
const users = ids.map(id => {
    obj1[`id_${id}`] = id;
})
console.log(users, obj1);

function outter() {
    const innerVariable = 'footer';
    return function () {
        return innerVariable;
    }
}
const fn = outter();

console.log(fn());

const zootopia = [
    {name: 'baozi', gender: '1'},
    {name: 'baozi2', gender: '2'}
]
for(const {name, gender} of zootopia) {
    console.log(`${name}===>${gender}`)
}
for( const item of zootopia.entries() ) {
    const [, {name,gender}] = item;
    console.log(name)
}
















