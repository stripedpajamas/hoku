const fs = require('fs');
const Y = require('yttrium-server');
const ah = require('./payloads/ah');
const er = require('./payloads/er');
const al = require('./payloads/al');
const ls = require('./payloads/ls');
const lm = require('./payloads/lm');
const np = require('./payloads/np');
const friday = require('./payloads/friday');

const { $, server, router } = Y();

// get assets
const airhorn = fs.readFileSync('./assets/airhorn.mp3');
const lawnmower = fs.readFileSync('./assets/lawnmower.png');
const friday = fs.readFileSync('./assets/friday.mp3');

// init routes
$.route('index')
  .append('<ah>')
  .append('<er>')
  .append('<al>')
  .append('<ls>')
  .append('<lm>')
  .append('<np>')
  .append('<friday>')
  .append('<assets>');

$.route('index > assets')
  .append('<airhorn>')
  .append('<lawnmower>')
  .append('<friday>');

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

$.route('index > lm')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(lm);
  });

$.route('index > np')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(np);
  });

$.route('index > assets > airhorn')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    res.end(airhorn);
  });

$.route('index > assets > lawnmower')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(lawnmower);
  });

$.route('index > assets > friday')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    res.end(friday);
  });
$(server).listen(process.env.PORT || 3000);

$(server).on('request', router);
