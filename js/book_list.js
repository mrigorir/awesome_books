let addButton    = document.getElementById('add');
let message      = document.getElementById('message');
const bookList   = document.getElementById('list');
let counter = 0;
const books = [];

addButton.addEventListener('click', function(event) {
  event.preventDefault();
  let bookTitle  = document.getElementById('title');
  let bookAuthor = document.getElementById('author');
  const add_collection = Object.assign({}, { title: bookTitle, author: bookAuthor, counter: counter });

  if (add_collection.title.value == ''|| add_collection.author.value == '') {
    message.innerHTML = "<p> Don't let the fields empty, please. </p>";
    return false;
  }

  books.push(add_collection);
  let div = document.createElement('div');
  div.innerHTML = `<div id="${counter}">`;
  div.innerHTML += `<p> Book Title: ${title.value}</p>`;
  div.innerHTML += `<p> Book Author: ${author.value}</p>`;
  div.innerHTML += ` <button class='remove'>Remove</button>`;
  div.innerHTML += `<hr>`;
  div.innerHTML += `</div>`;
  bookList.appendChild(div);
  message.innerHTML = 'New book added to the collection';
  counter += 1;  
  console.log(books);
});

bookList.addEventListener('click', function(e) {

  if(e.target.classList.contains('remove')) {
    let btn = e.target;
    let position = btn.parentNode.id;
    let index = books.indexOf(position);
    books.splice(index, 1);
    console.log(books);
    btn.parentNode.remove();
    message.innerHTML = "A book has been removed";
  }
  
});
