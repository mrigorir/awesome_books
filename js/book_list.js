let addButton    = document.getElementById('add');
let removeButton = document.querySelector('.remove');
let message      = document.getElementById('message');

const books = [
  {
    title: 'Book 1',
    author: 'Author 1' 
  },
  {
    title: 'Book 2',
    author: 'Author 2'
  },
  {
    title: 'Book 3',
    author: 'Author 3'
  }
];

addButton.addEventListener('click', function(event) {
  event.preventDefault();
  let bookTitle  = document.getElementById('title').value;
  let bookAuthor = document.getElementById('author').value;
  const add_collection = Object.assign({}, {title: bookTitle, author: bookAuthor});

  if (add_collection.title == ''|| add_collection.author == '') {
    message.innerHTML = "<p> Don't let the fields empty, please. </p>";
    return false;
  }else {
    books.push(add_collection);
    message.innerHTML = 'New book added to the collection';
  }

  console.log(books);
});
