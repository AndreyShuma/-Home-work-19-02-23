"use strict";
const root = document.querySelector('.root');

let tlStatus =null;
let placeEl = null;

const render = () => {
    const html = `<div class ="tl">
        <div class = "go "></div>
        <div class = "warn"></div>
        <div class = "stop active"></div>
    </div>`;

    placeEl.innerHTML = html;
}

const setStatus = (status) => {
    // передати статус світлофора
    tlStatus = status;
}

const init = (_placeEl) => {
    placeEl = _placeEl;
    render(placeEl);
    // console.log(`Закпустили фунцію inst з параметром ${_placeEl.textContent}`);
} 
setStatus('active');
init(root);
// console.log("tlStatus ->",tlStatus);
// console.log("placeEl ->",placeEl);
// render(root);



//=====================================
// ДОМАШКА 19-02-23

const home = document.querySelector('.home');
const idInput = document.querySelector('.idInput');
const exampel =document.querySelector('.exampel');
const btn = document.querySelector('.btn');
const itemValue = idInput.value;

//----- функції----------
const createBlock = (item) => {
    let arr =[];
    for (let i=0; i < item; i++) {
        let count = i + 1;
        const a = `<div class="block" data-value ="${count}">      
        </div>`;
        arr.push(a);
    }
    exampel.innerHTML = arr.join('');
};
function romb(event)  {
    let evTarget = event.target;
    if(evTarget.classList[0] !== `block`) {return};
    let a = evTarget.dataset.value;
    evTarget.innerHTML = a;
}

//-----Запуск функції----------

 btn.addEventListener('click', () => {
    // console.log('count->', idInput.value);
    createBlock(idInput.value);
});

exampel.addEventListener('click', romb);
// exampel.removeEventListener('click', romb);
