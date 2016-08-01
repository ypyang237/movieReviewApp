'use strict';

const ReviewFunctions = function(){
  var reviews = [
    {
      id : 0,
      name : "Inception",
      rating : 8.8
    },
    {
      id : 1,
      name : "Spectre",
      rating : 7.7
    },
    {
      id : 2,
      name : "Zootopia",
      rating : 8.2
    }
  ];

  function getNextId(){
    var nextId = 0;

    reviews.forEach(function(element){
      if(element.id > nextId){
        nextId = element.id + 1;
      }
    });

    return nextId;
  }

  function getAll(callback){
    callback(reviews);
  }

  function addReview(name, rating, callback){
    var nextId = getNextId();

    reviews.push({
      id : nextId,
      name : name,
      rating : rating
    });

    callback("success");
  }

  return {
    getAll : getAll,
    addReview : addReview
  };
};

module.exports = ReviewFunctions();