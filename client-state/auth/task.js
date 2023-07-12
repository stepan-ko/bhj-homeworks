

const form = document.getElementById('signin__form');
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const user_id = document.getElementById('user_id');


const idUser = localStorage.getItem('idUser');

function showUser(id) {
    user_id.textContent = id;
    welcome.classList.add('welcome_active');
}

idUser ? showUser(idUser) : null;

btn.addEventListener('click', e => {
    e.preventDefault();    
    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        const result = JSON.parse(xhr.responseText);
        if(result.success) {
            localStorage.setItem('idUser', result.user_id);     
            showUser(result.user_id);      
        } else {
            alert('Неверный логин/пароль');
        }
    })
})