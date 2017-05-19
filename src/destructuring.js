
//动态属性名
const obj = {};
const key = 'foot';
obj[key +'abc'] = 'bar';

var data = {
    name:'baozi',
    age: 27,
    love: 'aa',
    code: 'aaaa.....'
};
const arrays = [1,2,3,4,5,6,{aa:1}];
const {name, age} = data;

function fetchData() {
    return new Promise((resolve, reject) => {
        resolve({
            code: 200,
            message: 'ok',
            unde: '120',
            data: [1, 2]
        });
    });
}
function filterData(id) {
    const arras = [1,2,3,4,5,5,6];
    return new Promise((resolve, reject) => {
        resolve(arras.filter(id => id > 2));
    });
}
var loadData = fetchData();
loadData.then((result) => {
    const {code, unde, data} =  result;
    return {
        code,
        data,
        unde
    };
})
.then((data1) => {
    const {code: status, unde=1, data:[aa, bb]} = data1;
    console.log( status, unde );
    return filterData(aa);
}).then((result) => {
    console.log ('good===>', result);
});

