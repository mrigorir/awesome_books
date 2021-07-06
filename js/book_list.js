let addButton = document.getElementById('add');
let message = document.getElementById('message');
let counter = 0;
const bookList = document.getElementById('list');
const books = JSON.parse(localStorage.getItem('books'));
if (books === []) {
  localStorage.setItem('books', JSON.Stringify([]));
}

load();

addButton.onclick = function(event) {
  event.preventDefault();
  let bookTitle  = document.getElementById('title').value;
  let bookAuthor = document.getElementById('author').value;
  const addCollection = Object.assign({}, { title: bookTitle, author: bookAuthor });
  checkInputs('', '');
  books.push(addCollection);
  displayBook(bookTitle, bookAuthor);
  message.innerHTML = 'New book added to the collection';
  counter += 1;  
  console.log(books);
  localStorage.setItem('books', JSON.stringify(books));
};

bookList.addEventListener('click', function(e) {
  if(e.target.classList.contains('remove')) {
    let btn = e.target;
    let position = btn.parentNode.id;
    let index = books.indexOf(position);
    books.splice(position, 1);
    console.log(books);
    btn.parentNode.remove();
    message.innerHTML = "A book has been removed";
  }
  localStorage.setItem('books', JSON.stringify(books));
});

function load() {
  books.forEach(book => {
    displayBook(book.title, book.author);
  });
  console.log(books);
}

function checkInputs(title, author) {
  if (title == ''|| author == '') {
    message.innerHTML = "<p> Don't let the fields empty, please. </p>";
    return false;
  }
}

function displayBook(title, author) {
  let div = document.createElement('div');
  div.innerHTML = `<div id="${counter}">`;
  div.innerHTML += `<p> Book Title: ${title}</p>`;
  div.innerHTML += `<p> Book Author: ${author}</p>`;
  div.innerHTML += ` <button class='remove'>Remove</button>`;
  div.innerHTML += `<hr>`;
  div.innerHTML += `</div>`;
  bookList.appendChild(div);
}

