'use strict';

const express         = require('express'),
      router          = express.Router(),
      ReviewFunctions = require('../lib/reviewfunctions')
      ;

router.route('/')
  .get(function(req, res) {
    ReviewFunctions.getAll(function(reviews){
      res.send({
        success : true,
        data : reviews
      });
    });
  })

  .post(function(req, res) {
    ReviewFunctions.addReview(req.body.name, req.body.rating, function(reviews){
      res.send({
        success : true,
        reviews : reviews
      });
    });
  })

  .put(function(req, res) {
    ReviewFunctions.editReview(req.body.id, req.body.name, req.body.rating, function(reviews){
      res.send({
        success : true,
        reviews : reviews
      });
    });
  })

  .delete(function(req, res) {
    ReviewFunctions.deleteReview(req.body.id, function(reviews){
      res.send({
        success : true,
        reviews  : reviews
      });
    });
  });

router.route('/:query')
  .get(function(req, res){
    ReviewFunctions.search(req.params.query, function(results){
      res.send({
        results : results
      });
    });
  });

router.route('/id/:id')
.get(function(req, res){
  ReviewFunctions.searchById(req.params.id, function(result){
    res.send({
      result : result
    });
  });
});

module.exports = router;