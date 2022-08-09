'use strict'

for (let index = 1; index < 10; index ++) {
   document.getElementById(`hole` + index).onclick = function() {
    if (this.className.includes('hole_has-mole')) {
        document.getElementById('dead').textContent = +document.getElementById('dead').textContent + 1;
    }
    else {
        document.getElementById('lost').textContent = +document.getElementById('lost').textContent + 1;
   }
   winOrLuse();
   }
}

  
function winOrLuse() {
    if (+document.getElementById('dead').textContent === 10) {
      alert('Победа!');
      document.getElementById('dead').textContent = 0;
      document.getElementById('lost').textContent = 0;
    } 
    else if(+document.getElementById('lost').textContent === 5) {
      alert('Попоробуйте снова(((');
      document.getElementById('dead').textContent = 0;
      document.getElementById('lost').textContent = 0;
    }
  }