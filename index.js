const bookList = document.querySelector('.book-list');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('#addButton');

function Store(books) {
  localStorage.setItem('books', JSON.stringify(books));
}

const booksArray = JSON.parse(localStorage.getItem('books')) || [];

const refreshList = () => {
  Store(booksArray);
  bookList.innerHTML = booksArray
    .map((data, index) => `<li><p>${data.title}</p><p>${data.author}</p>
      <button onclick=Book.removeBooks(${index}) class="removeButton">Remove</button></li>`).join('');
};

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    booksArray.push(this);
  }

  static removeBooks(index) {
    booksArray.splice(index, 1);
    refreshList();
  }
}

refreshList();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Book(title.value, author.value);
  booksArray.push(book);
  refreshList();
  title.value = '';
  author.value = '';
});