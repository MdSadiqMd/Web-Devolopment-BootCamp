const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

async function connectToMongoDB(url) {
    return mongoose.connect("mongodb://localhost:27017/short-url", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Increase this value if needed
    });
    
}

module.exports = connectToMongoDB; // Correct export
