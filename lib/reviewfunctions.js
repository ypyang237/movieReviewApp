'use strict';

const Review   = require('../models/review')
      ;

const ReviewFunctions = function(){
  function getAll(){
    console.log("frog");
  }

  return {
    getAll : getAll
  };
};

module.exports = ReviewFunctions();