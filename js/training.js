'use strict';

const training = document.querySelector('.training');

const items =[
    {CENA: 40}, {CENA:120}, {CENA:505}, {CENA: 350}
];
let result=[];
for( let item of items) {
    `Price: ${item.CENA}`;
    result.push(item.CENA);
}
// function sum (arr) {
//     let n = arr.reduce( (ac,b) => ac + b, 0 );
//     console.log(n);
//     return n
// }
// console.log(result);
function sum(res) {
    let r = 0;
    for( let s of res) {
        if(typeof s !== 'number') { throw 'Помилка'};
        r += s;
    }
    return r
}
// function sum(res) { 
//     let r = 0;
//     let s = res.map((item) => r += item);
//     console.log(r);
//     return r
// }
sum(result);
// console.log(`десь string`)

function divide(a, b) {
    if (b === 0) {
      throw "Ошибка: деление на ноль!";
    }
    return a / b;
  }
  
//   console.log(divide(10, 2));
  try {
    // console.log(divide(10, 0));
  } catch (e) {
    // console.log(e);
  }
