
var through = require('through2');

function propStream( valid ){
  return through.obj( function( chunk, enc, next ){
    if( 'object' === typeof chunk ){
      for( var prop in chunk ){
        if( !valid( prop ) ){
          delete chunk[ prop ];
        }
      }
    }
    this.push( chunk );
    next();
  });
}

module.exports.whitelist = function( list ){
  return propStream( function( prop ){
    return -1 !== list.indexOf( prop );
  });
};

module.exports.blacklist = function( list ){
  return propStream( function( prop ){
    return -1 === list.indexOf( prop );
  });
};