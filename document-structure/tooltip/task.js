'use strict'

const tooltip = document.createElement('div');
tooltip.classList.add("tooltip");
const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

for (const item of hasTooltips) {
    item.addEventListener('click', showTooltip);
}


function showTooltip(event) {
    const tooltipText = this.title;
    if (tooltipText != tooltip.innerText) {
        tooltip.classList.remove('tooltip_active');
        
    } 
    tooltip.innerText = tooltipText;
    const placetip = this.getBoundingClientRect();
    tooltip.style.left = `${placetip.x}px`;
    tooltip.style.top = `${placetip.y + 20}px`; 
    tooltip.classList.toggle('tooltip_active');
    this.appendChild(tooltip);
    event.preventDefault();
}