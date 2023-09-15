const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body || !body.url) {
        return res.status(400).json({ error: "url is required" });
    }
    const shortId = shortid.generate(); // Use shortid.generate() instead of shortid()
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json({ id: shortId });
}

module.exports = { handleGenerateNewShortURL };
