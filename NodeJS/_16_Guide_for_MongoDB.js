const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/testDB") // This will create a db with name testDB in mongoDB Compass automatically and connect to it
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("Failed to connect Mongo DB"));

// Schema
const user = new mongoose.Schema({
  name: String,
  creator: String,
  publishedDate: { type: Date, default: Date.now() },
  isPublished: Boolean,
});

// Model --> Model is basically an object and Schema is a class
// We can have multiple objects for a single Schema
const User = mongoose.model("User", user); // we are creating a model of name "User" with "user"

// This block will give give error when you run it for the "second" time because you are creating the same user again
/*async function createUser(){
    // Now let's Insert the data in User (made by user Schema)
    const data=new User(
        {
            name:"Sadiq",
            creator:"Allah",
            isPublished:true
        },
        {
            name:"Mohammad",
            creator:"Allah",
            isPublished:true
        }
    );
    // save the created data into database
    const result=await data.save();
    console.log(result);
}*/

async function createUser() {
  // Now let's Insert the data in User (made by user Schema)
  const data = [
    {
      name: "Sadiq",
      creator: "Allah",
      isPublished: true,
    },
    {
      name: "Mohammad",
      creator: "Allah",
      isPublished: true,
    },
  ];
  // save the created data into database using InsertMany() this will generate _id when it runs
  const result = await User.insertMany(data);
  console.log(result);
}

// createUser();

// Querying the documents
(async () => {
  const query = await User.find({ name: "Sadiq" }).select({name:1}); // we have given 1 for name because we only need to find in that one document only
  console.log(query);
})();
