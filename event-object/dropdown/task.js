
// Обработка событий открытия/закрытия списка
const buttonsDropdown = document.querySelectorAll('.dropdown__value');
Array.from(buttonsDropdown).forEach((button) => {
  button.addEventListener('click', () => {
    const dropdown = button.closest('.dropdown'); // поиск родителя
    dropdown.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
  })
})

// Обработка событий элементов списка
const dropdownItems = document.querySelectorAll('.dropdown__item');
Array.from(dropdownItems).forEach((item) => {
  item.addEventListener('click', (event) => {
    item.closest('.dropdown__list').classList.remove('dropdown__list_active');  // закрыть список
    const dropdown = item.closest('.dropdown'); // поиск родителя
    dropdown.querySelector('.dropdown__value').textContent = item.textContent;
    event.preventDefault(); // запретить переход по ссылке
  })
})

