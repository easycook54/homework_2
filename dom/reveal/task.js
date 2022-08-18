'use strict'

const reveal = document.querySelectorAll('div.reveal');


function showReveal () {
    reveal.forEach(elem => {
        if (elem.getBoundingClientRect().top < window.innerHeight) {
            elem.classList.add('reveal_active');
        }
        return elem;
    });
}


window.addEventListener('scroll', showReveal);