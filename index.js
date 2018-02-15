const express = require('express');

const app = express();

app.use(express.static('build'));

app.listen((process.env.HOST = 3000), error => {
  if (error) return console.log(error);
  console.log('Static server running...');
});
