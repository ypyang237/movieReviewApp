'use strict';

const express = require('express'),
      router  = express.Router();


router.route('/')
  .get(function(req, res) {
    res.send({success: true});
  })

  .post(function(req, res) {
    res.send({success : true,
              method  : 'post'});
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