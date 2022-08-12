'use strict'

const menusSub = Array.from(document.querySelectorAll('li > ul')); // Создаем массив из элементов с вложениями
for (let i = 0; i < menusSub.length; i ++) {
    menusSub[i].closest('li').querySelector('a').onclick = function() {
         if (!menusSub[i].className.includes('menu_active'))
         menusSub[i].className = 'menu menu_sub menu_active';
         else {
            menusSub[i].className = 'menu menu_sub';
         } 
         return false;
     }
 }

/* Повышенный уровень сложности п.1
for (let i = 0; i < menusSub.length; i ++) {
    menusSub[i].closest('li').querySelector('a').onclick = function() {
        menusSub.forEach(function(elem) {
            elem.className = 'menu menu_sub'; 
        }); 
        menusSub[i].className = 'menu menu_sub menu_active'; 
        return false;
    }
} 
*/