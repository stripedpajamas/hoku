const fs = require('fs');
const { join } = require('path')

const Y = require('yttrium-server');
const ah = require('./payloads/ah');
const al = require('./payloads/al');
const er = require('./payloads/er');
const fr = require('./payloads/fr');
const ls = require('./payloads/ls');
const op = require('./payloads/op');
const ra = require('./payloads/ra');
const ys = require('./payloads/ys');

const { $, server, router } = Y();

// get index.html
const index = fs.readFileSync(join(__dirname, './index.html'));

// init routes
$.route('index')
  .append('<ah>')
  .append('<al>')
  .append('<er>')
  .append('<fr>')
  .append('<ls>')
  .append('<op>')
  .append('<ra>')
  .append('<ys>')

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

$.route('index > ys')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.end(ys);
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

$.route('index > assets > youSuffer')
  .on('route', (e, req, res) => {
    e.stopPropagation();
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    res.end(youSuffer);
  });

$(server).on('request', router);

module.exports = $(server)
