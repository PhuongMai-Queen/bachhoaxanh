// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
// ];

// // function isCherries(fruit) {
// //     return fruit.name === 'cherries';
// // }

// // console.log(inventory.find(isCherries));
// const result = inventory.find( fruit => fruit.name === 'cherriess' );

// console.log(result) ;
// // { name: 'cherries', quantity: 5 }

var arr1 = [{
    id: '124',
    name: 'qqq',
    phone: '012'
}, {
    id: '589',
    name: 'www',
    phone: '034'

}, {
    id: '45',
    name: 'eee'
}, {
    id: '567',
    name: 'rrr',
    phone: '078'

}];

var arr2 = [{
    id: '124',
    name: 'ttt',
    class:'3'
}, {
    id: '456',
    name: 'yyy',
    class:'4'

}];

// arr1 = arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);

// var demo =  arr2.find(o => o.id === arr1.id) || arr1;
let demo = arr2.find(obj => obj.id == arr1.id) || arr1;
// console.log(arr1);
demo.phone='hi';
console.log(demo);
// console.log(demo);
