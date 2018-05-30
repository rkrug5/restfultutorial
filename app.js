const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyParser.json());



Genre = require('./models/genre');
Book = require('./models/book');





//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');

const db = mongoose.connection;

app.get('/', function (req, res) {
	res.send('please use /api/books or api/genres');
});

app.get('/api/genres', function (req, res) {
	Genre.getGenres(function (err, genres) {

		if (err) {
			throw err;
		}
		res.json(genres);
	})

});

app.post('/api/genres', function (req, res) {
	var genre = req.body;

	Genre.addGenre(genre, function (err, genre) {

		if (err) {
			throw err;
		}
		res.json(genre);
	})

});

app.put('/api/genres/:id', function (req, res) {
	var id = req.params._id;
	var genre = req.body;

	Genre.updateGenre(id, genre, {}, function (err, genre) {

		if (err) {
			throw err;
		}
		res.json(genre);
	})

});


app.delete('/api/genres/:id', function (req, res) {
	var id = req.params._id;
	// var book = req.body;

	Genre.removeGenre(id, function (err, book) {

		if (err) {
			throw err;
		}
		res.json(genre);
	})

});

app.get('/api/books', function (req, res) {
	Book.getBooks(function (err, genres) {

		if (err) {
			throw err;
		}
		res.json(genres);
	})

});



app.post('/api/books', function (req, res) {
	var book = req.body;

	Book.addBook(book, function (err, book) {

		if (err) {
			throw err;
		}
		res.json(book);
	})

});

app.get('/api/books/:_id', function (req, res) {
	Book.getBookById(req.params._id, function (err, book) {

		if (err) {
			throw err;
		}
		res.json(book);
	})

});


app.put('/api/books/:id', function (req, res) {
	var id = req.params._id;
	var book = req.body;

	Book.updateBook(id, book, {}, function (err, book) {

		if (err) {
			throw err;
		}
		res.json(book);
	})

});


app.delete('/api/books/:_id', function (req, res) {
	var id = req.params._id;
	// var book = req.body;

	Book.removeBook(id, function (err, book) {

		if (err) {
			throw err;
		}
		res.json(book);
	})

});

app.listen(3000);
console.log('app is listening on port 3000');
