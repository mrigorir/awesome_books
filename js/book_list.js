// Variables
const message = document.getElementById('message');
const bookList = document.getElementById('list');
const form = document.getElementById('form');
const listLink = document.getElementById('listLink');
const addLink = document.getElementById('addLink');
const contactLink = document.getElementById('contactLink');
const mainContent = document.getElementById('main-content');
const addSection = document.getElementById('add-section');
const listSection = document.getElementById('list-section');
const contactSection = document.getElementById('contact-section');
const nav = document.getElementById('nav');
let books = [];

// Constructor
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Classes
class BookList {
  static fade() {
    setTimeout(() => { message.style = 'display: block; transition: all ease 1s; '; }, 0);
    setTimeout(() => { message.style = 'opacity: 0; transition: all ease 1s;'; }, 1000);
  }

  static addBook(obj) {
    if (obj.title === '' || obj.author === '') {
      message.innerHTML = "<p class='shadow-sm border text-center font-bold p-3 rounded w-100'> Don't let the fields empty, please. </p>";
      BookList.fade();
    } else {
      books.push(obj);
      BookList.displayBook(obj.title, obj.author);
      message.innerHTML = "<p class='shadow-sm border text-center font-bold p-3 rounded w-100'> New book added to the collection </p>";
      BookList.fade();
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static remove(btn, position) {
    const li = btn.parentNode;
    books.splice(position, 1);
    if (Array.prototype.indexOf.call(bookList.childNodes, li) === 0) {
      li.parentNode.classList.remove('border-black');
    }
    btn.parentNode.remove();
    message.innerHTML = "<p class='shadow-sm border text-center font-bold p-3 rounded w-100'> A book has been removed </p>";
    BookList.fade();
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBook(title, author) {
    const li = document.createElement('li');
    li.classList.add('font-bold', 'px-2', 'py-2', 'd-flex', 'align-items-center', 'justify-content-between');
    li.innerHTML = `<div class="font-bold text-dark d-flex flex-column">
                      <span><i class="fa fa-book pe-1 mb-1"></i>     Title: <span class="font-normal"> ${title}  </span> </span>
                      <span class=""><i class="fa fa-user pe-1"></i> Auhor: <span class="font-normal"> ${author} </span> </span>
                    </div>
                    <button class='remove button border-black rounded'> Remove </button>`;
    bookList.appendChild(li);
    li.parentNode.classList.add('border-black');
  }
}

class Storage {
  static load() {
    const booksOnStorage = JSON.parse(localStorage.getItem('books'));
    if (booksOnStorage == null) {
      localStorage.setItem('books', JSON.stringify([]));
    } else {
      books = booksOnStorage;
    }
    books.forEach((book) => {
      BookList.displayBook(book.title, book.author);
    });
  }
}

class ShowViews {
  static clear() {
    mainContent.textContent = '';
  }

  static showView(e) {
    switch (e.target) {
      case listLink:
        ShowViews.clear();
        mainContent.appendChild(listSection);
        break;
      case addLink:
        ShowViews.clear();
        mainContent.appendChild(addSection);
        break;
      case contactLink:
        ShowViews.clear();
        mainContent.appendChild(contactSection);
        break;
      default:
        break;
    }
  }
}

// Event functions
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const newBook = new Book(bookTitle, bookAuthor);
  BookList.addBook(newBook);
  e.target.reset();
});

bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const btn = e.target;
    const position = Array.prototype.indexOf.call(bookList.childNodes, btn.parentNode.parentNode.parentNode) - 1;
    BookList.remove(btn, position);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  Storage.load();
});

nav.addEventListener('click', (e) => {
  e.preventDefault();
  ShowViews.showView(e);
});
