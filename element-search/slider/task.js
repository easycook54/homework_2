'use strict'

const sladers = Array.from(document.querySelectorAll('div.slider__items > div'));
const arrow = Array.from(document.querySelectorAll('div.slider__arrows > div'));
const dots = Array.from(document.querySelectorAll('div.slider__dots > div'));
dots[0].className = 'slider__dot slider__dot_active';

let i = sladers.findIndex(ifSladerActive);

arrow[0].onclick = function() {
sladers[i].className = 'slider__item';
dots[i].className = 'slider__dot';
i --;
if (i < 0) {
    i = sladers.length - 1;
}
sladerActive(i);
dotActive(i);
}

arrow[1].onclick = function() {
sladers[i].className = 'slider__item';
dots[i].className = 'slider__dot';
i ++;
    if (i >= sladers.length) {
        i = 0;
    }
    sladerActive(i);
    dotActive(i);
};

for (let j = dots.length - 1; j >= 0; j --) {
    dots[j].onclick = function() {
        if (i = j) {
            sladerActive(j);
            dotActive(j);
        }
    }
}

dots[0].onclick = function() {
    sladerActive(0);
    dotActive(0);
}

function ifSladerActive(elem) {
    if (elem.className.includes('slider__item_active')) {
    return elem;
    }
} 

function sladerActive(i) {
    sladers.forEach(function(elem) {
        elem.className = 'slider__item';
    });
    sladers[i].className = 'slider__item slider__item_active';
}

function dotActive(i) {
    dots.forEach(function(elem) { 
        elem.className = 'slider__dot';
    });
    dots[i].className = 'slider__dot slider__dot_active';
}

/* Второй вариант
const sladers = Array.from(document.querySelectorAll('div.slider__items > div'));
const arrow = Array.from(document.querySelectorAll('div.slider__arrows > div'));
const dots = Array.from(document.querySelectorAll('div.slider__dots > div'));
dots[0].className = 'slider__dot slider__dot_active';

let i = 0;

function sladerActive(i) {
    sladers.forEach(function(elem) {
        elem.className = 'slider__item';
    });
    sladers[i].className = 'slider__item slider__item_active';
}

function dotActive(i) {
    dots.forEach(function(elem) { 
        elem.className = 'slider__dot';
    });
    dots[i].className = 'slider__dot slider__dot_active';
}

arrow[1].onclick = function() {
    i ++;
    if (i >= sladers.length) {
        i = 0;
    }
    sladerActive(i);
    dotActive(i);
};

 
arrow[0].onclick = function() {
    i --;
    if (i < 0) {
        i = sladers.length - 1;
    }
    sladerActive(i);
    dotActive(i);
};


for (let j = dots.length - 1; j >= 0; j --) {
    dots[j].onclick = function() {
        if (i = j) {
            sladerActive(j);
            dotActive(j);
        }
    }
}
  

dots[0].onclick = function() {
    sladerActive(0);
    dotActive(0);
}
*/