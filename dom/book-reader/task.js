'use strict'

const fontsize = document.querySelectorAll('a.font-size');

for (const elem of fontsize) {
    elem.onclick = function() {
        cleanFonts();
        if (elem.getAttribute('class').includes('small')) {
            elem.closest('.book').setAttribute('class', 'book book_fs-small');
            elem.classList.add('font-size_active');
        }
        if (elem.getAttribute('class').includes('big')) {
            elem.closest('.book').setAttribute('class', 'book book_fs-big');
            elem.classList.add('font-size_active');
        }

        if (!elem.getAttribute('class').includes('small') && !elem.getAttribute('class').includes('big')) {
            elem.closest('.book').setAttribute('class', 'book');
            elem.classList.add('font-size_active');
        } 
        return false;
    }
}


function cleanFonts() {
    fontsize.forEach(elem => {
        elem.classList.remove('font-size_active');
        elem.closest('.book').setAttribute('class', 'book');
        return elem;
    });
}