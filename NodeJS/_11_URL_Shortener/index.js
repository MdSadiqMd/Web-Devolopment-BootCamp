const express = require("express");
const connectToMongoDB = require("./connection"); // Correct import
const { router } = require("./routes/url");
const URL=require("./models/url");
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
    console.log("MongoDB Connected");
}).catch((error) => {
    console.error("MongoDB Connection Error:", error);
});

app.use(express.json());

app.use("/url", router);

app.get("/:shortID",async (req,res)=>{
    const shortID=req.params.shortID;
    await URL.findByIdAndUpdate({
        shortId
    },{$push:{
        visitHistory:{
            timestamp:Date.now(),
        },
    },});
});
res.redirect(entry.redirectURL);
app.listen(PORT, () => {
    console.log(`Server Started at :${PORT}`);
});
