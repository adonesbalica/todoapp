const dropdown = document.querySelector('.dropdown');

const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const menu = dropdown.querySelector('.menu');
const options = dropdown.querySelectorAll('.menu li');
const selected = dropdown.querySelector('.selected');
const inputText = document.querySelector('#note');
const searchButton = document.querySelector('#search-button');
const toggleDarkMode = document.querySelector('#toggle-theme-container');
const toggleDarkModeImage = document.querySelector('#toggle-theme-image');

let note;
let toggle = false;

function getInputText() {
    note = inputText.value;
    console.log(note);
}

function darkMode() {
    toggle = !toggle;
    var element = document.body;
    element.classList.toggle('dark-mod');

    if (toggle) {
        toggleDarkModeImage.src = '../../assets/img/sun_vector.svg';
    } else {
        toggleDarkModeImage.src = './assets/img/moon_vector.svg';
    }
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

toggleDarkMode.addEventListener('click', darkMode);

inputText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getInputText();
    }
});
