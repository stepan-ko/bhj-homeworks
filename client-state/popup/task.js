

const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = "closed=true";    
})

const allCookies = document.cookie;
const cookies = allCookies.split('; ');
const isClosed = cookies.find(element => {return (element === 'closed=true')});
!isClosed ? modal.classList.add('modal_active') : null;
