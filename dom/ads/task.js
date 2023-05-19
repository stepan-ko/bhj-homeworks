
const rotators = document.querySelectorAll('.rotator');

rotators.forEach(item => {
  setInterval(item => changeRotator(item), 1000, item);
});

function changeRotator(rotator) {
  const activeItem = rotator.querySelector('.rotator__case_active');
  const nextItem = activeItem.nextSibling.nextSibling ? activeItem.nextSibling.nextSibling : activeItem.parentNode.firstChild.nextSibling;

  activeItem.classList.remove('rotator__case_active');
  nextItem.classList.add('rotator__case_active');
  nextItem.style.color = nextItem.dataset.color;
}

