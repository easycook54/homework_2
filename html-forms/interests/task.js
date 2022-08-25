'use strict'

const typeOfInputs = document.querySelectorAll('.interests_active');

for (const elem of typeOfInputs) {
    const inputs = elem.closest('li').querySelector('input');

    inputs.addEventListener('change', (e) => {
        const types = elem.querySelectorAll('input');

        for (const item of types) {
            if (inputs.checked === true) {
                item.checked = true;
            } else {
                item.checked = false;
            }
        }
    });
}