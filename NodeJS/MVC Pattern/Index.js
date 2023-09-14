// The MVC Pattern Stands for Model View Controller
// We are going to Change the _10_Connecting_NodeJS_with_MongoDB".js to MVC Pattern
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/MongoDataBase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB error", err));

app.use(express.json());
app.use(express.static("public"));

const logRequest = require("./Middlewares/Index"); // Import the middleware

app.use(logRequest); // Use the middleware

const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));

