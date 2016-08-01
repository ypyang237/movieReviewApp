'use strict';

const ReviewFunctions = function(){
  var reviews = [
    {
      name : "Inception",
      rating : 8.8
    },
    {
      name : "Spectre",
      rating : 7.7
    },
    {
      name : "Zootopia",
      rating : 8.2
    }
  ];

  function getAll(callback){
    callback(reviews);
  }

  return {
    getAll : getAll
  };
};

module.exports = ReviewFunctions();