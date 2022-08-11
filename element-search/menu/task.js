'use strict'

const menusSub = Array.from(document.querySelectorAll('li > ul')); // Создаем массив из элементов с вложениями
for (let i = 0; i < menusSub.length; i ++) {
    menusSub[i].closest('li').querySelector('a').onclick = function() {
        menusSub.forEach(function(elem) {
            elem.className = 'menu menu_sub'; // при клике закрываем все приложения
        }); 
        menusSub[i].className = 'menu menu_sub menu_active'; // и открываем нужное
        return false;
    }
}
