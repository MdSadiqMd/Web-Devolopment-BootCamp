const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  // Render the 'index.ejs' template with a list of items
  res.render('index', { items: [] });
});

app.get('/add', (req, res) => {
  // Render the 'add.ejs' template for adding new items
  res.render('add');
});

app.post('/add', (req, res) => {
  // Handle adding new items here and redirect to the homepage
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
