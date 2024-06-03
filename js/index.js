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
const list = document.querySelector('.list');

let note;
let toggle = false;

const allNotes = [];
const displayNotes = allNotes;

function getInputText() {
    note = inputText.value;
    allNotes.push(constructLiElement(note));

    displayNotes.forEach((note) => {
        list.appendChild(note);
    });

    console.log(allNotes[0]);
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

function constructLiElement(note) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');

    input.type = 'checkbox';
    li.appendChild(input);
    span1.textContent = note;
    li.appendChild(span1);
    img1.src = './assets/img/pen_vector.svg';
    img1.alt = 'edit button';
    img2.src = './assets/img/trash_vector.svg';
    img2.alt = 'delete button';
    span2.appendChild(img1);
    span2.appendChild(img2);
    li.appendChild(span2);

    return li;
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
