const mongoose = require("mongoose");

mongoose.set("Strict Query",true);

async function connectMongoDb(url){
    return mongoose.connect(url);
};

module.exports={
    connectMongoDb,
};