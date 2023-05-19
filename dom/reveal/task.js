
const reveals = document.querySelectorAll('.reveal');

document.addEventListener('scroll' , () => {
    reveals.forEach(reveal => showDiv(reveal))
})

function showDiv(element) {
   const position = element.getBoundingClientRect();
   if (position.top > 0 && position.bottom < window.innerHeight) {
    element.classList.add('reveal_active')
   } else {
    element.classList.remove('reveal_active')
   }
}