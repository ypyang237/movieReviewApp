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

    console.log('req.body.name', req.body.name);
    console.log('req.body.id', req.body.id);
    console.log('req.body.rating', req.body.rating);

    res.send({success : true,
              method  : 'put'});
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