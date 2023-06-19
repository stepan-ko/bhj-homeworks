
const linksTooltip = document.querySelectorAll('.has-tooltip');

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

linksTooltip.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        tooltip.textContent = link.title;
        tooltip.style.top = Math.round(link.getBoundingClientRect().y) + 20 + 'px';
        tooltip.style.left = Math.round(link.getBoundingClientRect().x) + 'px';
        if (link.nextElementSibling && link.nextElementSibling.classList.contains('tooltip')) {
            tooltip.classList.toggle('tooltip_active');
        }
        else {
            link.insertAdjacentElement('afterend', tooltip);
            tooltip.classList.add('tooltip_active');
        }
    })
})

//скрыть подсказку при скролле
document.addEventListener('scroll', () => {
    tooltip.classList.remove('tooltip_active');
})