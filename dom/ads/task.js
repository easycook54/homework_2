'use strict'

const rotator = Array.from(document.querySelectorAll('span.rotator__case'));
let i = rotator.findIndex(elem => !elem.classList.contains('rotator__case_active'));


function rotatorChange() {
    rotator.forEach(elem => elem.classList.remove('rotator__case_active'))
    rotator[i].classList.add('rotator__case_active');
    i ++;
    if (i > rotator.length - 1) {
    i = 0;
    }
};


setInterval(rotatorChange, 1000);

// Повышенный уровень
/*
const rotator = Array.from(document.querySelectorAll('span.rotator__case'));
let i = rotator.findIndex(elem => !elem.classList.contains('rotator__case_active'));


function rotatorChange() {
    rotator.forEach(elem => elem.classList.remove('rotator__case_active'))
    rotator[i].classList.add('rotator__case_active');
    rotator[i].style.color = rotator[i].dataset.color;
    const time = rotator[i].dataset.speed;
    i ++;
    if (i > rotator.length - 1) {
    i = 0;
    }
    setTimeout(rotatorChange, time);
};

rotatorChange();
*/

