const fs = require('fs');
const Y = require('yttrium-server');
const ah = require('./payloads/ah');

const { $, server, router } = Y();

// get assets
const airhorn = fs.readFileSync('./assets/airhorn.mp3');

// init routes
$.route('index')
  .append('<ah>')
  .append('<assets>');

$.route('index > assets')
  .append('<airhorn>');


// handle routes
$.route('index > ah')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(ah);
  });

$.route('index > assets > airhorn')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    res.end(airhorn);
  });
$(server).listen(process.env.PORT || 3000);

$(server).on('request', router);
