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
    res.send({success : true,
              method  : 'put'});
  })

  .delete(function(req, res) {
    res.send({success : true,
              method  : 'delete'});
  });



module.exports = router;