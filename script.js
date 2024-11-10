const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const tableBody = document.querySelector('#bookTable tbody');
  tableBody.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement('td');
    const readButton = document.createElement('button');
    readButton.textContent = book.read ? 'Read' : 'Not read';
    readButton.addEventListener('click', () => {
      book.read = !book.read;
      readButton.textContent = book.read ? 'Read' : 'Not read';
    });
    readCell.appendChild(readButton);
    row.appendChild(readCell);

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  });
}
newBookBtn.addEventListener('click', () => bookDialog.showModal());

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = parseInt(document.getElementById('pages').value, 10);
  const read = document.getElementById('read').checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  // Reset form and close dialog
  bookForm.reset();
  bookDialog.close();
});

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, false));
addBookToLibrary(new Book('The Silmarillion', 'J.R.R. Tolkien', 365, false));

displayBooks();

