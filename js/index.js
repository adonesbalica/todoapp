const dropdown = document.querySelector('.dropdown');

const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const menu = dropdown.querySelector('.menu');
const options = dropdown.querySelectorAll('.menu li');
const selected = dropdown.querySelector('.selected');
const inputText = document.querySelector('#note');
const searchButton = document.querySelector('#search-button');

let note;

function getInputText() {
    note = inputText.value;
    console.log(note);
}

select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});

options.forEach((option) => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach((option) => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
});

searchButton.addEventListener('click', getInputText);

inputText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getInputText();
    }
});
