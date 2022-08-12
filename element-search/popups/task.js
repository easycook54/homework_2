'use strict'

const modalClose = document.getElementsByClassName('modal__close modal__close_times');
modalClose[0].closest('div.modal').className = 'modal modal_active';

for(let i = 0; i < modalClose.length; i ++) {
    modalClose[i].onclick = function() {
        modalClose[i].closest('div.modal').className = 'modal';
    }
}


modalClose[0].closest('div.modal').querySelector('a').onclick = function() {
    modalClose[0].closest('div.modal').className = 'modal';
    modalClose[1].closest('div.modal').className = 'modal modal_active';
}