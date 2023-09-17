const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: String,
  shortUrl: String,
  clicks: Number,
  clickDetails: [{ date: Date, ip: String, userAgent: String }],
});

module.exports = mongoose.model('URL', urlSchema);
