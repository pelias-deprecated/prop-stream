
var propStream = require('../'),
    through = require('through2');

module.exports.blacklist = {};

module.exports.blacklist.removes_invalid_props = function(test, common) {
  test('removes invalid props', function(t) {
    var stream = propStream.blacklist(['a','b','c']);
    stream.pipe( through.obj( function( chunk ){
      t.deepEqual(Object.keys(chunk), ['d'], 'invalid props removed');
      t.end();
    }));
    stream.write({ a: 'a', b: 'b', c: 'c', d: 'd' });
  });
};

module.exports.blacklist.noop_on_non_object_streams = function(test, common) {
  test('noop on non-object streams', function(t) {
    var stream = propStream.blacklist(['a','b','c']);
    stream.pipe( through.obj( function( chunk ){
      t.equal( chunk, 'abcd', 'noop');
      t.end();
    }));
    stream.write( 'abcd' );
  });
};

module.exports.all = function (tape, common) {
  function test(name, testFunction) {
    return tape('blacklist ' + name, testFunction);
  }
  for( var testCase in module.exports.blacklist ){
    module.exports.blacklist[testCase](test, common);
  }
};