'use strict'
    
    const image = document.getElementById('cookie')
    const number = document.getElementById('clicker__counter');
    const speed = document.getElementById('clicker__speed');
    
    let firstDate = new Date(); 
    image.onclick = function() {
        number.textContent = +number.textContent + 1; // Задача 1
        image.width = 300;
        setTimeout(() => image.width = 200, 200);
        let finalDate = new Date();
        speed.textContent = (1 / (finalDate.getTime() - firstDate.getTime()) * 1000).toFixed(2); //Задача 2
        firstDate = finalDate;
    }