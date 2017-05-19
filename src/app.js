import {foo} from './env.config';

// console.log(envConfig, queryPamas, getDate);
console.log(foo);
function pro1() {
    return new Promise((resolve, reject) => {
        resolve({
            statu: 200,
            data: {name: 'baozi'}
        })
    })
}

function pro2() {
    return new Promise((resolve, reject) => {
        resolve({
            statu: 200,
            data: {name: 'haoge'}
        })
    })
}
function getAllPro(...args) {
    console.log(args);
    Promise.all(args).then((res) => {
    // Promise.all([pro1(),pro2()]).then((res) => {
        // debugger;
    },() => {
        // debugger;
    })
}
getAllPro(pro1(),pro2());



