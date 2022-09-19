const bookList = document.querySelector('.book-list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('#addButton');

function Store(books) {
  localStorage.setItem('books', JSON.stringify(books));
}

let booksArray = JSON.parse(localStorage.getItem('books')) || [];

const refreshList = () => {
  Store(booksArray);
  bookList.innerHTML = booksArray
    .map((data, index) => `<li><p>${data.title}</p><p>${data.author}</p>
      <button onclick=removeBook(${index}) class="removeButton">Remove</button></li>`).join('');
};

refreshList();

/* eslint-disable */
const removeBook = (index) => {
  booksArray = booksArray.filter((data, id) => id !== index);
  refreshList();
};

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const book = {
    title: title.value,
    author: author.value,
  };
  booksArray.push(book);
  refreshList();
});