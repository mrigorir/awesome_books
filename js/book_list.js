class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  
  addBook(obj) {
    if (this.title === '' || this.author === '') {
      message.innerHTML = "<p> Don't let the fields empty, please. </p>";
    } else {
      books.push(obj);
      displayBook(this.title, this.author);
      message.innerHTML = 'New book added to the collection';
      counter += 1;
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
  remove(btn, position) {
    books.splice(position, 1);
    btn.parentNode.remove();
    message.innerHTML = 'A book has been removed';
    localStorage.setItem('books', JSON.stringify(books));
  }
}

const newBook = new Book(this.title, this.author);
const addButton = document.getElementById('add');
const message = document.getElementById('message');
const bookList = document.getElementById('list');
const booksOnStorage = JSON.parse(localStorage.getItem('books'));
let counter = 0;
let books = [];

function displayBook(title, author) {
  const div = document.createElement('div');
  div.innerHTML = `<div id="${counter}">`;
  div.innerHTML += `<p> Book Title: ${title}</p>`;
  div.innerHTML += `<p> Book Author: ${author}</p>`;
  div.innerHTML += '<button class=\'remove\'>Remove</button>';
  div.innerHTML += '<hr>';
  div.innerHTML += '</div>';
  bookList.appendChild(div);
}

function load() {
  if (booksOnStorage == null) {
    localStorage.setItem('books', JSON.stringify([]));
  } else {
    books = booksOnStorage;
  }
  books.forEach((book) => {
    displayBook(book.title, book.author);
  });
}

document.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

addButton.onclick = () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const newBook = new Book (bookTitle, bookAuthor);
  newBook.addBook(newBook);
};

bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const btn = e.target;
    const position = Array.prototype.indexOf.call(bookList.childNodes, btn.parentNode) - 1;
    newBook.remove(btn, position);
  }
});

load();
