'use strict';

const mongoose   = require('mongoose');

function connect() {
  mongoose.connect('mongodb://localhost/image');

  var db = mongoose.connection;
  db.once('open', function() {
    console.log("database opened");
  });
}

module.exports = connect();