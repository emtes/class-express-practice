const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const path = require("path");

const Book = require("./models/Book");
const BookList = require("./models/BookList");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Setting a public folder for our static files
app.use(express.static("public"));

//Set EJS as our templating language
app.set("view engine", "ejs");

//Create list to hold our books
const list = new BookList();

app.get('/', (req, res) => {
  res.render('index.ejs', { books: list.books })
})

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "add-book.html"));
});

app.post("/add", (req, res) => {
  const { title, author, imageURL, description } = req.body;
  const book = new Book(title, author, imageURL, description);
  list.addBook(book);
  res.redirect("/");
});

app.post('/delete/:id', (req, res) => {
  const bookId = req.params.id
  list.deleteBook(bookId)
  res.redirect("/")
})

app.listen(port, () => console.log(`Now listening on port ${port}.`));
