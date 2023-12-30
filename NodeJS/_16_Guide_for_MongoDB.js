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
// can also write funtion and call it but for fun just using IIFE
(async () => {
  const query = await User.find({ name: "Sadiq" }).select({ name: 1 }); // we have given 1 for name because we only need to find in that one document only
  console.log(query);
})();

// Updating data in database
async function update(id) {
  let update = await User.findById(id);
  if (!update) {
    return;
  } else {
    update.name = "Md.Sadiq";
    const updated = await update.save();
    console.log(updated);
  }
}
update("6590213997be3814b5d535a4");

// Deleting Data in Database
async function Delete(id){
    const deleted=await User.findByIdAndDelete(id);
    console.log(deleted);
}
Delete('659023b143bffcc6a32968ff') // If it is already deleted (running for the second time) or the id is not present in the databse then it will return Null