
const buttonsSize = document.querySelectorAll('.book__control_font-size a');
buttonsSize.forEach(button => setSize(button, buttonsSize));

const buttonsBgColor = document.querySelectorAll('.book__control_background a');
buttonsBgColor.forEach(button => setBackGroundColor(button, buttonsBgColor));

const buttonsColor = document.querySelectorAll('.book__control_color a');
buttonsColor.forEach(button => setColor(button, buttonsColor));

//Установить шрифт
function setSize(button, buttons) {
  button.addEventListener('click', event => {
    changeFocusButton(button, buttons);

    const book = document.querySelector('#book');
    book.classList.remove('book_fs-big', 'book_fs-small');

    const size = button.dataset.size ? button.dataset.size : false;
    size ? book.classList.add(`book_fs-${size}`) : null;
    event.preventDefault();
  })
}

//Установить цвет фона
function setBackGroundColor(button, buttons) {
  button.addEventListener('click', event => {
    changeFocusButton(button, buttons);

    const book = document.querySelector('#book');
    book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');

    const bgColor = button.dataset.bgColor
    book.classList.add(`book_bg-${bgColor}`)

    event.preventDefault();
  })
}

//Установить цвет текста
function setColor(button, buttons) {
  button.addEventListener('click', event => {
    changeFocusButton(button, buttons);

    const book = document.querySelector('#book');
    book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

    const textColor = button.dataset.textColor
    book.classList.add(`book_color-${textColor}`)

    event.preventDefault();
  })
}

//Переместить выделение кнопки
function changeFocusButton(activeButton, buttons) {
  const typeButton = activeButton.classList[0];
  buttons.forEach(button => button.classList.remove(`${typeButton}_active`));
  activeButton.classList.add(`${typeButton}_active`);
}