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
let displayNotes;

function getInputText() {
    if (inputText.value === '') return;
    allNotes.push(constructLiElement(inputText.value));
    inputText.value = '';
    displayList(allNotes);
}

function displayList(listsOfNotes) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    listsOfNotes.forEach((note) => {
        list.appendChild(note);
    });
}
function getActiveFilter() {
    const selectedFilter = document.querySelector('.selected').textContent.toLocaleLowerCase();

    switch (selectedFilter) {
        case 'all':
            displayList(allNotes);
            break;
        case 'completed':
            displayNotes = allNotes.filter((element) => {
                if (element.querySelector('input').checked) return element;
            });
            displayList(displayNotes);
            break;
        case 'incompleted':
            displayNotes = allNotes.filter((element) => {
                if (!element.querySelector('input').checked) return element;
            });
            displayList(displayNotes);
            break;
    }
}

function darkMode() {
    toggle = !toggle;
    document.body.classList.toggle('dark-mod');

    let isDarkmode = document.body.classList.contains('dark-mod');
    window.localStorage.setItem('darkmode', isDarkmode);

    if (toggle) {
        toggleDarkModeImage.src = '../../assets/img/sun_vector.svg';
    } else {
        toggleDarkModeImage.src = './assets/img/moon_vector.svg';
    }
}

let darkmode = JSON.parse(window.localStorage.getItem('darkmode'));
if (darkmode === true) {
    document.body.classList.add('dark-mod');
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
menu.addEventListener('click', getActiveFilter);

toggleDarkMode.addEventListener('click', darkMode);

searchButton.addEventListener('click', getInputText);

inputText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getInputText();
    }
});
