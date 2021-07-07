const message = document.getElementById('message');
const bookList = document.getElementById('list');
const form = document.getElementById('form');
let books = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  static addBook(obj) {
    if (obj.title === '' || obj.author === '') {
      message.innerHTML = "<p> Don't let the fields empty, please. </p>";
    } else {
      books.push(obj);
      BookList.displayBook(obj.title, obj.author);
      message.innerHTML = 'New book added to the collection';
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static remove(btn, position) {
    books.splice(position, 1);
    btn.parentNode.remove();
    message.innerHTML = 'A book has been removed';
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBook(title, author) {
    const div = document.createElement('div');
    div.innerHTML = `<p> Book Title: ${title}</p>
                     <p> Book Author: ${author}</p>
                     <button class='remove'>Remove</button>
                     <hr>`;
    bookList.appendChild(div);
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
    const position = Array.prototype.indexOf.call(bookList.childNodes, btn.parentNode) - 1;
    BookList.remove(btn, position);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  Storage.load();
});
