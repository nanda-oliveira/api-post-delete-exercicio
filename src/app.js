const express = require('express');
const app = express();

const post = require('./routes/postRoute');

app.use(express.json());

app.use('/', post);

module.exports = app;
