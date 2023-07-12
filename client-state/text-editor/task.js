
const editor = document.getElementById('editor');
const clear = document.getElementById('clear');
const textValue = localStorage.getItem('textValue');

editor.value = textValue;

function setLocal(name, value) {
    localStorage.setItem(name, value);
}

editor.addEventListener('input' , () => {
    setLocal('textValue', editor.value);
})

clear.addEventListener('click' , () => {
    editor.value = '';
    setLocal('textValue', '');
})