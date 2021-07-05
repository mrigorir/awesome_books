const addButton = document.getElementById('add');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const remButton = document.querySelector('.remove');

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

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const add_collection = Object.create(books);
  add_collection.title = bookTitle.value
  add_collection.author = bookAuthor.value
  console.log(add_collection)
  books.push(add_collection);
});

remButton.addEventListener('click', (event) => {
  event.preventDefault();
  const bookSearch = books.filter(title === bookTitle)
  bookSearch.remove();
});

