import getDate from './module_a'
require('./app.scss');
console.log('version',VERSION)
console.log(BROWSER_SUPPORTS_HTML5)
console.log(TWO)
console.log(PRODUCTION)

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
