'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let reviewSchema = mongoose.Schema({
  title         : String,
  year          : Number,
  score         : Number,
  criticReview  : String
});

let Review = mongoose.model('Review', reviewSchema);

module.exports = Review;