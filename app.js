const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');

const db = mongoose.connection;

app.get('/', function (req, res) {
	res.send('hello world');

});

app.listen(3000);
console.log('app is listening on port 3000');
