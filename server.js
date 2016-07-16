var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log('IP', ip);
  console.log('Request object', req);

  res.json({
    status: 'success'
  });
});

app.listen(PORT, function () {
  console.log("Pop Pop's Express server is up on port " + PORT);
});
