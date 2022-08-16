'use strict'

const links = document.querySelectorAll('li > a');
const value = document.getElementsByClassName('dropdown__value')[0];
const list = document.getElementsByClassName('dropdown__list')[0];

value.addEventListener('click', openList);


for (let i = 0; i < links.length; i ++) {
    links[i].onclick = function() {
        closeList(i);
        return false;
    }
}


function openList() {
        list.className = 'dropdown__list dropdown__list_active';
    }


function closeList(i) {
        list.className = 'dropdown__list';
        value.textContent = links[i].textContent;
    }


