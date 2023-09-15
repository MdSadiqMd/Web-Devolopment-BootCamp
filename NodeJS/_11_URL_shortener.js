/*
To run open Postman
POST --> http://localhost:8001/shorten
Body --> raw --> JSON --> {
  "url": "https://www.example.com"
}
Send
*/
const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
const PORT = process.env.PORT || 8001;

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });

// Create a URL schema and model
const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const URL = mongoose.model("URL", urlSchema);

app.use(express.json());

// Create a new short URL
app.post("/shorten", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortId = shortid.generate();

  try {
    await URL.create({
      shortId,
      redirectURL: url,
    });

    return res.json({ shortUrl: `http://localhost:${PORT}/${shortId}` });
  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Redirect to the original URL
app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;

  try {
    const url = await URL.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    await URL.findByIdAndUpdate(
      url._id,
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true }
    );

    return res.redirect(url.redirectURL);
  } catch (error) {
    console.error("Error redirecting:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started at :${PORT}`);
});
