"use strict"
/*
let myArray = [11,22,34,65,34];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a: 1, b: 2});
mySet.delete(22);
mySet.add('100');
mySet.add('200');

//console.log(mySet.size);

mySet.forEach(function(val){
  console.log(val);
});

let myMap = new Map([['a1','Hello'], ['b2', 'Goodbye']]);
myMap.set('c3', 'Foo');
myMap.delete('a1');
console.log(myMap.size);

let carWeakSet = new WeakSet();

let car1 = {
  make: 'Honda',
  model: 'Civic'
}

carWeakSet.add(car1);

let car2 = {
  make: 'Toyota',
  model: 'Camry'
}

carWeakSet.add(car2);

carWeakSet.delete(car1);
console.log(carWeakSet);
*/

// let carWeakMap = new WeakMap();

// let key1 = {
//     id: 1
// }

// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
// }

// let key2 = {
//     id: 2
// }

// let car2 = {
//     make: 'Toyota',
//     model: 'Camry'
// }

// carWeakMap.set(key1, car1);
// carWeakMap.set(key2, car2);

// carWeakMap.delete(key1);

// console.log(carWeakMap);


// arrow function


/*
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
  return arr.map((x) => {
    console.log(this.prefix + x);
  });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']);
*/

/*
let add = function(a,b){
  let sum = a+b;
  console.log(sum);
  return false;
}
*/

// let add = (a, b) => {
//     let sum = a + b;
//     console.log(sum);
//     return false;
// }

// add(10, 2);


// Immediatley Resolved
//var myPromise = Promise.resolve('Foo');

//myPromise.then((res) => console.log(res));

/*
var myPromise = new Promise(function(resolve, reject){
  setTimeout(() => resolve(4), 2000);
});

myPromise.then((res) => {
  res +=3;
  console.log(res);
});
*/

// function getData(method, url) {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function () {
//             if (this.status >= 200 && this.status < 300) {
//                 resolve(xhr.response);
//             } else {
//                 reject({
//                     status: this.status,
//                     statusText: xhr.statusText
//                 });
//             }
//         };
//         xhr.onerror = function () {
//             reject({
//                 status: this.status,
//                 statusText: xhr.statusText
//             });
//         };
//         xhr.send();
//     });
// }

// getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function (data) {
//     let todos = JSON.parse(data);
//     let output = '';
//     for (let todo of todos) {
//         output += `
//       <li>
//         <h3>${todo.title}</h3>
//         <p>Completed: ${todo.completed}</p>
//       </li>
//     `;
//     }

//     document.getElementById('template').innerHTML = output;
// }).catch(function (err) {
//     console.log(err);
// });

function* g1() {
    console.log('Hello');
    yield 'Yield 1 Ran..';
    console.log('World');
    yield 'Yield 2 Ran...';
    return 'Returned..';
}

var g = g1();

/*
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
*/

for (let val of g) {
    console.log(val);
}