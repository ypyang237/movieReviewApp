'use strict';


const express    = require('express'),
      bodyParser = require('body-parser'),
      api        = require('./routes/api'),
      app        = express(),
      PORT       = process.env.PORT || 3000
      ;

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  ;

app.use('/api', api);

app.use(express.static(__dirname + "/public"));

app.get('*', function(req, res){
  res.sendFile('./public/index.html',
    {
      root  : __dirname
    });
});

app.listen(PORT, function() {
  console.log(`Server listening on port: ${PORT}`);
});