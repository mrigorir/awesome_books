let addButton    = document.getElementById('add');
let removeButton = document.querySelector('.remove');
let message      = document.getElementById('message');
const bookList       = document.getElementById('list')
const books = [];

addButton.addEventListener('click', function(event) {
  event.preventDefault();
  bookList.insertAdjacentHTML('afterbegin',
  `<div>
    <p>Title: ${title.value}</p>
    <p>Author: ${author.value}</p>
    <button class='remove' type="button"">Remove</button>
    <hr>
  </div>`)
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
