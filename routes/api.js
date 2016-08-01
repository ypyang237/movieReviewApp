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
    res.send({success : true,
              method  : 'delete'});
  });

router.route('/:query')
  .get(function(req, res){
    ReviewFunctions.search(req.params.query, function(results){
      res.send({
        results : results
      });
    });
  });

module.exports = router;