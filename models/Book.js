class Book {
  constructor(title, author, imageURL, description) {
    this.id = ++Book.count;
    this.title = title;
    this.author = author;
    this.imageURL = imageURL;
    this.description = description;
    this.dateAdded = new Date();
  }
}

Book.count = 0;

module.exports = Book;
