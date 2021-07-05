let addButton  = document.getElementById('add');
let bookTitle  = document.getElementById('title').value;
let bookAuthor = document.getElementById('author').value;

const books = [
  {
    title: 'Book 1',
    author: 'Author 1'
  },
  {
    title: 'Book 2',
    author: 'Author 1'
  },
  {
    title: 'Book 3',
    author: 'Author 1'
  }
];

addButton.on('click', function() {
  const add_collection = Object.create(books, {title: bookTitle, author: bookAuthor });
  books.push(add_collection);
});
