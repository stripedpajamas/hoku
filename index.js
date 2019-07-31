const fs = require('fs');
const Y = require('yttrium-server');
const ah = require('./payloads/ah');
const al = require('./payloads/al');
const er = require('./payloads/er');
const fr = require('./payloads/fr');
const ls = require('./payloads/ls');
const op = require('./payloads/op');
const ra = require('./payloads/ra');

const { $, server, router } = Y();

// get assets
const airhorn = fs.readFileSync('./assets/airhorn.mp3');
const friday = fs.readFileSync('./assets/friday.mp3');

// get index.html
const index = fs.readFileSync('./index.html');

// init routes
$.route('index')
  .append('<ah>')
  .append('<al>')
  .append('<er>')
  .append('<fr>')
  .append('<ls>')
  .append('<op>')
  .append('<ra>')
  .append('<assets>');

$.route('index > assets')
  .append('<airhorn>')
  .append('<friday>');

// handle routes
$.route('index')
  .on('route', (e, req, res) => {
    e.stopPropagation();
  res.end(index);
  });
$.route('index > ah')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(ah);
  });

$.route('index > al')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(al);
  });

$.route('index > er')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(er);
  });

$.route('index > fr')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(fr);
  });

$.route('index > ls')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(ls);
  });

$.route('index > op')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(op);
  });

$.route('index > ra')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(ra);
  });

$.route('index > assets > airhorn')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    res.end(airhorn);
  });

$.route('index > assets > friday')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    res.end(friday);
  });
$(server).listen(process.env.PORT || 3000);

$(server).on('request', router);
