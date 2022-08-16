'use strict'

const links = document.querySelectorAll('li > a');
const value = document.getElementsByClassName('dropdown__value')[0];
const list = document.getElementsByClassName('dropdown__list')[0];

value.addEventListener('click', closeList);

for (let i = 0; i < links.length; i ++) {
    links[i].onclick = function() {
        value.textContent = links[i].textContent;
        closeList();
        return false;
    }
}


function closeList() {
    list.classList.toggle('dropdown__list_active');
}