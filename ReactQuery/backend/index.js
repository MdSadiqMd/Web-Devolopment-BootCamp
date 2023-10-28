const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
  const products =  [
    {
      id: 1,
      name: "A",
      price: 100,
      image: "https://picsum.images/940/650"
    },
    {
      id: 2,
      name: "B",
      price: 200,
      image: "https://picsum.images/940/650"
    },
    {
      id: 3,
      name: "C",
      price: 300,
      image: "https://picsum.images/940/650"
    },
    {
      id: 4,
      name: "D",
      price: 400,
      image: "https://picsum.images/940/650"
    },
    {
      id: 5,
      name: "E",
      price: 500,
      image: "https://picsum.images/940/650"
    },
  ];

  if (req.query.search) {
    const searchQuery = req.query.search.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.json(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
