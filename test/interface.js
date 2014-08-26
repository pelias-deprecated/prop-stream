
var propStream = require('../');

module.exports.all = function (tape, common) {
  tape('interface', function(t) {
    t.equal(typeof propStream.whitelist, 'function', 'valid function');
    t.equal(propStream.whitelist.length, 1, 'valid arguments length');
    t.equal(typeof propStream.blacklist, 'function', 'valid function');
    t.equal(propStream.blacklist.length, 1, 'valid arguments length');
    t.end();
  });
};