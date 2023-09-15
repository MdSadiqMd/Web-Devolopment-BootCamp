const express = require("express");
const connectToMongoDB = require("./connection");
const { router } = require("./routes/url");
const URL = require("./models/url"); // Correct import
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.error("MongoDB Connection Error:", error);
    });

app.use(express.json());

app.use("/url", router);

app.get("/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOne({ shortId: shortID });

    if (!entry) {
        return res.status(404).json({ error: "URL not found" });
    }

    await URL.findByIdAndUpdate(
        {
            shortId: shortID,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
    console.log(`Server Started at :${PORT}`);
});
