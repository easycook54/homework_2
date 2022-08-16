'use strict'

const tab = document.querySelectorAll('div.tab__navigation > div');
const contents = document.querySelectorAll('div.tab__contents > div');

for (let i = 0; i < tab.length; i ++) {
    tab[i].onclick = function() {
        tabsActive(i);
        contentsActive(i);
    }
}


function tabsActive(i) {
 tab.forEach(function(elem) {
    elem.className = 'tab';
 })
 tab[i].className = 'tab tab_active';
}


function contentsActive(i) {
    contents.forEach(function(elem) {
        elem.className = 'tab__content';
     })
     contents[i].className = 'tab__content tab__content_active';
}