const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;
const connectToMongoDB = require("./connection");
const urlRouter = require("./routes/url");

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });

app.use(express.json());
app.use("/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server Started at :${PORT}`);
});
