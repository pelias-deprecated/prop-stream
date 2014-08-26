
var tape = require('tape');
var common = {};

var tests = [
  require('./interface.js'),
  require('./whitelist.js'),
  require('./blacklist.js')
];

tests.map(function(t) {
  t.all(tape, common);
});