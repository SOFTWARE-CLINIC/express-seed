'use strict';

const express = require('express');
const PORT = 8080;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Daniel!');
});

app.get('/env', function (req, res) {
  res.json(process.env);
});

app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
});

