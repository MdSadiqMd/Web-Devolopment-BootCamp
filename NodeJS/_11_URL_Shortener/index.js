const express = require("express");
const connectToMongoDB = require("./connection"); // Correct import
const { router } = require("./routes/url");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
    console.log("MongoDB Connected");
}).catch((error) => {
    console.error("MongoDB Connection Error:", error);
});

app.use("/url", router);

app.listen(PORT, () => {
    console.log(`Server Started at :${PORT}`);
});
