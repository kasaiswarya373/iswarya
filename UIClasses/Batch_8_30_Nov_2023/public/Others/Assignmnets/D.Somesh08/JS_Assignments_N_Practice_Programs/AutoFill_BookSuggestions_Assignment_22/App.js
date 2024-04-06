
let bookRepo = [
    {
        name: 'abc',
        author: 'Rohit'
    },
    {
        name: 'bbc',
        author: 'Kohli'
    },
    {
        name: 'cbc',
        author: 'Gill'
    },
    {
        name: 'dbc',
        author: 'Jadeja'
    },
    {
        name: 'aabc',
        author: 'Siraj'
    }
]

let getSuggestions = () => {
    let books = [];

    let keyDownValue = document.querySelector('#searchBox').value.trim().toLowerCase();

    for (let i = 0; i < bookRepo.length; i++) {
        if (bookRepo[i].name.startsWith(keyDownValue)) {
            books.push(bookRepo[i].name)
        }
    }
    return books;

}

let showSuggestions = () => {
    let slctTag = document.querySelector('#suggestedBooks');

    slctTag.style.display = 'block';

    if (slctTag.hasChildNodes()) {
        clearChildNodes();
    }

    let bookList = getSuggestions();

    for (let i = 0; i < bookList.length; i++) {
        let option = document.createElement('option');
        option.value = bookList[i]
        option.innerText = bookList[i]
        slctTag.append(option);
    }
}

function clearChildNodes() {
    let slctTag = document.querySelector('#suggestedBooks');
    while (slctTag.lastElementChild) {
        slctTag.removeChild(slctTag.lastElementChild);
    }

}

let fillValue = (event) => {
    let searchInput = document.querySelector('#searchBox');
    searchInput.value = '';

    console.log(event.target)

    searchInput.value = event.target.value;
}
// let el = document.querySelector('#searchBox').innerText = document.querySelector('#suggestedBooks');
// let value = el.value;
// let text = el.options[el.selectedIndex].text;

function loadValues() {
    let slctTag = document.querySelector('#suggestedBooks');
    slctTag.style.display = 'block';
    
    for (let i = 0; i < bookRepo.length; i++) {
        let option = document.createElement('option');
        option.value = bookRepo[i].name;
        option.innerText = bookRepo[i].name;
        slctTag.append(option);
        console.log(slctTag)
    }
}