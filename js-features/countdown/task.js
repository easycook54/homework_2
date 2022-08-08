'use strict'

const finalCountDown = function() {
    const timer = document.getElementById('timer');
    const timer1 = document.getElementById('timer1');
    timer.textContent -= 1; // Задача 1
    let seconds = timer.textContent * 1000;
    timer1.textContent = new Date(0, 0, 0, 0, 0, 0, seconds).toLocaleTimeString('ru-Ru', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
        }); // Задача 2
    if (+timer.textContent === 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
    }
};


let timerId = setInterval(finalCountDown, 1000);