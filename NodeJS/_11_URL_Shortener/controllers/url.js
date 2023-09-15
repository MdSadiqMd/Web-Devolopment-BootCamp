const shortid = require("shortid");
const URL = require("../models/url");

const generateShortURL = async (url) => {
    const shortId = shortid.generate();
  
    try {
      await URL.create({
        shortId,
        redirectURL: url,
      });
  
      // Assuming PORT is defined in your module scope
      const shortUrl = `http://localhost:${PORT}/${shortId}`;
  
      return shortUrl;
    } catch (error) {
      console.error("Error creating short URL:", error);
      throw new Error("Internal Server Error");
    }
  };
  

async function redirectToOriginalURL(req, res) {
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
}

module.exports = {
  generateShortURL,
  redirectToOriginalURL,
};
