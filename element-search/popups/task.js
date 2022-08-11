'use strict'

const showWindow = document.getElementById('modal_main');
showWindow.className = 'modal modal_active';
const modalClose = document.getElementsByClassName('modal__close modal__close_times');
const showWindow1 = document.getElementById('modal_success');
const btnDanger = document.getElementsByClassName('btn');


modalClose[0].onclick = function() {
    showWindow.className = 'modal';
}


btnDanger[0].onclick = function() {
    showWindow1.className = 'modal modal_active';
    showWindow.className = 'modal';
}

modalClose[1].onclick = function() {
    showWindow1.className = 'modal';
}