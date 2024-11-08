const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
const leHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);

addBookToLibrary(leHobbit);
//console.table(myLibrary);

