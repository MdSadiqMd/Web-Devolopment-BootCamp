const mongoose = require("mongoose");
const uri="mongodb://127.0.0.1:27017";
function connectToMongoDB(uri) {
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
}

module.exports = connectToMongoDB;
