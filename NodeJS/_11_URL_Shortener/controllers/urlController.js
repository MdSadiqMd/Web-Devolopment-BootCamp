const express = require('express');
const router = express.Router();
const URL = require('../models/urlModel');
const shortid = require('shortid');

router.get('/', async (req, res) => {
  const urls = await URL.find();
  res.render('home', { urls });
});

router.post('/shorten', async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortUrl = shortid.generate();
  const newURL = new URL({ longUrl, shortUrl, clicks: 0, clickDetails: [] });
  await newURL.save();
  res.render('shortened', { shortUrl, longUrl });
});

router.get('/:shortUrl', async (req, res) => {
  const shortUrl = req.params.shortUrl;
  const url = await URL.findOne({ shortUrl });

  if (url) {
    url.clicks++;
    url.clickDetails.push({
      date: new Date(),
      ip: req.ip,
      userAgent: req.get('User-Agent'),
    });
    await url.save();
    res.redirect(url.longUrl);
  } else {
    res.status(404).send('URL not found');
  }
});

router.get('/stats/:shortUrl', async (req, res) => {
  const shortUrl = req.params.shortUrl;
  const url = await URL.findOne({ shortUrl });

  if (url) {
    res.render('stats', { shortUrl, longUrl: url.longUrl, clicks: url.clicks, clickDetails: url.clickDetails });
  } else {
    res.status(404).send('URL not found');
  }
});

module.exports = router;
