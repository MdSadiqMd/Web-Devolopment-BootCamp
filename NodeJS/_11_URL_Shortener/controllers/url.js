const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "url is required" });
    }
    const newShortId = shortid.generate();
    await URL.create({
        shortId: newShortId,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json({ id: newShortId });
}

module.exports = { handleGenerateNewShortURL };
