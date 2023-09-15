const express = require("express");
const router = express.Router();
const { generateShortURL, redirectToOriginalURL } = require("../controllers/url");

router.post("/shorten", generateShortURL);
router.get("/:shortId", redirectToOriginalURL);

module.exports = router;
