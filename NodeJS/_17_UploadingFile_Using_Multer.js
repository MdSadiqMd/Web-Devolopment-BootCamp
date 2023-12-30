const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 8000;

// This way will generate the folder of assests from the frontend but not in desirable form
//const upload = multer({ dest: "uploads/" }); // Here we are creating an instance of multer and saying it that to upload the uploaded files from frontend into uploads folder

// so we use below method
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./NodeJS/_17_uploads"); //cb the call back function takes two parameters error and destination to store for now we given the error as null
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`); // Herre if we give the same file name then it will overwrite the previous file with same name so we use date.now() to generate uneven names
  },
});
const upload = multer({ storage });

app.set("view engine", "ejs");
app.set(
  "views",
  path.resolve(
    "C:/Users/Sadiq/Desktop/Web-Devolopment-BootCamp/NodeJS/_17_views"
  )
);

app.use(express.json());

app.use(express.urlencoded({ extended: false })); // Applying this middle ware to parse the incoming form data

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.post("/upload", upload.single("profileImage"), (req, res) => { // Here we are writing simgle because we are uploading only one file; we can write ".feilds" or ".array" to upload multiple files
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
