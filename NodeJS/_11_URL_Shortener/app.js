const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/url_shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const urlController = require('./controllers/urlController');
app.use('/', urlController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
