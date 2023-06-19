const taskList = document.getElementById('tasks__list');
const btn = document.getElementById('tasks__add');
const input = document.getElementById('task__input');


function addTask(text) {
    const div = document.createElement('div');
    div.classList.add('task');
    div.innerHTML = `    
        <div class="task__title">
           ${text}
        </div>
        <a href="#" onclick='closeTask(this);' class="task__remove">&times;</a>    
    `;

    taskList.appendChild(div);
}

function closeTask(e) {    
    e.parentElement.remove();
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    input.value ? addTask(input.value) : null;
    input.value = '';
})