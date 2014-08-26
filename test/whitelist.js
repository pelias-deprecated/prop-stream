
var propStream = require('../'),
    through = require('through2');

module.exports.whitelist = {};

module.exports.whitelist.removes_invalid_props = function(test, common) {
  test('removes invalid props', function(t) {
    var stream = propStream.whitelist(['a','b','c']);
    stream.pipe( through.obj( function( chunk ){
      t.deepEqual(Object.keys(chunk), ['a','b','c'], 'invalid props removed');
      t.end();
    }));
    stream.write({ a: 'a', b: 'b', c: 'c', d: 'd' });
  });
};

module.exports.whitelist.noop_on_non_object_streams = function(test, common) {
  test('noop on non-object streams', function(t) {
    var stream = propStream.whitelist(['a','b','c']);
    stream.pipe( through.obj( function( chunk ){
      t.equal( chunk, 'abcd', 'noop');
      t.end();
    }));
    stream.write( 'abcd' );
  });
};

module.exports.all = function (tape, common) {
  function test(name, testFunction) {
    return tape('whitelist ' + name, testFunction);
  }
  for( var testCase in module.exports.whitelist ){
    module.exports.whitelist[testCase](test, common);
  }
};