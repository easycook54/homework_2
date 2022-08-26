'use strict'

const quantityvalue = Array.from(document.getElementsByClassName('product__quantity-value'));
const controldec =Array.from(document.getElementsByClassName('product__quantity-control_dec'));
const controlinc = Array.from(document.getElementsByClassName('product__quantity-control_inc'));
const productadd = Array.from(document.getElementsByClassName('product__add'));


function addInBasket() {
    let cartproduct = document.createElement('div');
    cartproduct.classList.add("cart__product");
    cartproduct.dataset.id = this.closest('.product').dataset.id;

    let clonedImg = document.createElement('img');
    clonedImg.classList.add('cart__product-image');
    clonedImg.src = this.closest('.product__controls').previousElementSibling.src;
    
    cartproduct.insertAdjacentHTML('afterBegin', clonedImg.outerHTML);
    
    let countdivs = document.createElement('div');
    countdivs.classList.add('cart__product-count');
    countdivs.textContent = this.previousElementSibling.getElementsByClassName('product__quantity-value')[0].textContent;
    
    cartproduct.insertAdjacentHTML('beforeEnd', countdivs.outerHTML);
   
    let cart = Array.from(document.getElementsByClassName('cart__products'))[0];
    let cartcontents = Array.from(cart.getElementsByClassName("cart__product"));
    let cartlap = -1;

    for (let i = 0; i < cartcontents.length; i++) {
        if (cartcontents[i].dataset.id == cartproduct.dataset.id) {
            cartlap = i;
        } 
    }

    if (cartlap > -1) {
        let cartContentsCountDiv = cartcontents[cartlap].getElementsByClassName("cart__product-count")[0];
        cartContentsCountDiv.textContent = Number(cartContentsCountDiv.textContent) + Number(countDiv.textContent);
    } else {
        cart.insertAdjacentHTML("afterBegin", cartproduct.outerHTML);
    }
}


function add(){
    let indexactive = controlinc.indexOf(this);
    let count = Number(quantityvalue[indexactive].innerHTML);
    count++;
    quantityvalue[indexactive].textContent = count;
}


function remove() {
    let indexactive = controldec.indexOf(this);
    let count = Number(quantityvalue[indexactive].innerHTML);
    if (count > 1) {
        count--;
        quantityvalue[indexactive].textContent = count;
    }
}

for (const item of controlinc) {
    item.addEventListener('click', add);

}
for (const item of controldec) {
    item.addEventListener('click', remove);
}
for (const item of productadd) {
    item.addEventListener('click', addInBasket);
}