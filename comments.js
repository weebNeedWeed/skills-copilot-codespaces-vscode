// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

const COMMENTS_FILE = './comments.json';

app.get('/api/comments', (req, res) => {
	fs.readFile(COMMENTS_FILE, (err, data) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		res.json(JSON.parse(data));
	});
});

app.post('/api/comments', (req, res) => {
	fs.readFile(COMMENTS_FILE, (err, data) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		const comments = JSON.parse(data);
		const newComment = {
			id: Date.now()
		};
	});
});