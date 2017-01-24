import getDate from './module_a'
require('./app.scss');
class Test {
    constructor(arg) {
        // init
        console.log(getDate())
    }
}
class Test2 {
    constructor(arg){
    }
}
new Test();
