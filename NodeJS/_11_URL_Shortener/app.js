const express = require('express');
const bodyParser = require('body-parser');
const path= require('path');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join("C:/Users/Sadiq/Desktop/Web-Devolopment-BootCamp/NodeJS/_11_URL_Shortener","public")));
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
