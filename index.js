const fs = require('fs');
const Y = require('yttrium-server');
const ah = require('./payloads/ah');
const er = require('./payloads/er');
const al = require('./payloads/al');
const ls = require('./payloads/ls');

const { $, server, router } = Y();

// get assets
const airhorn = fs.readFileSync('./assets/airhorn.mp3');

// init routes
$.route('index')
  .append('<ah>')
  .append('<er>')
  .append('<al>')
  .append('<ls>')
  .append('<assets>');

$.route('index > assets')
  .append('<airhorn>');


// handle routes
$.route('index > ah')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(ah);
  });

$.route('index > er')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(er);
  });

$.route('index > al')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(al);
  });

$.route('index > ls')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(ls);
  });

$.route('index > assets > airhorn')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    res.end(airhorn);
  });
$(server).listen(process.env.PORT || 3000);

$(server).on('request', router);
