'use strict'

const reveal = document.querySelectorAll('div.reveal');


function showReveal () {
    reveal.forEach(elem => {
        elem.classList.remove('reveal_active');
        if (elem.getBoundingClientRect().top < window.innerHeight && elem.getBoundingClientRect().bottom > 0) {
            elem.classList.add('reveal_active');
        }
        return elem;
    });
}


window.addEventListener('scroll', showReveal);