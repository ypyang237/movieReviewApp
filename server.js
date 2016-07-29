'use strict';


const express    = require('express'),
      bodyParser = require('body-parser'),
      api        = require('./routes/api');

const app   = express(),
      PORT  = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', api);
app.use(express.static('public'));


app.listen(PORT, function() {
  console.log(`Server listening on port: ${PORT}`);
});