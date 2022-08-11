'use strict'

const sladers = Array.from(document.querySelectorAll('div.slider__items > div'));
const arrow = Array.from(document.querySelectorAll('div.slider__arrows > div'));
const dots = Array.from(document.querySelectorAll('div.slider__dots > div'));
   

let i = 0;
    arrow[1].onclick = function() {
        i ++;
        sladers.forEach(function(elem) { 
            elem.className = 'slider__item';
        });
        dots.forEach(function(elem) { 
            elem.className = 'slider__dot';
        });
        if (i >= sladers.length) {
            i = 0;
        }
        sladers[i].className = 'slider__item slider__item_active';
        dots[i].className = 'slider__dot slider__dot_active';
    };

 
    arrow[0].onclick = function() {
        i --;
        sladers.forEach(function(elem) {
            elem.className = 'slider__item';
        });
        dots.forEach(function(elem) { 
            elem.className = 'slider__dot';
        });
        if (i < 0) {
            i = sladers.length - 1;
        }
        sladers[i].className = 'slider__item slider__item_active';
        dots[i].className = 'slider__dot slider__dot_active';
    };


    dots[0].className = 'slider__dot slider__dot_active';
    for (let j = dots.length - 1; j >= 0; j --) {
        dots[j].onclick = function() {
            sladers.forEach(function(elem) {
                elem.className = 'slider__item';
            });
            dots.forEach(function(elem) {
                elem.className = 'slider__dot';
            });
            if (i = j) {
                sladers[j].className = 'slider__item slider__item_active';
                dots[j].className = 'slider__dot slider__dot_active';
            }
        }
    }

    
    dots[0].onclick = function() {
        sladers.forEach(function(elem) {
            elem.className = 'slider__item';
        });
        dots.forEach(function(elem) {
            elem.className = 'slider__dot';
        });
        sladers[0].className = 'slider__item slider__item_active';
        dots[0].className = 'slider__dot slider__dot_active';
    }
