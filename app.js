const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const path = require('path');

const Book = require('./Book');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'add-book.html'));
});

app.post('/add', (req, res) => {
  console.log(req.body)
})
app.listen(port, () => console.log(`Now listening on port ${port}.`));