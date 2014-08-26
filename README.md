## Installation

```bash
$ npm install prop-stream
```

[![NPM](https://nodei.co/npm/prop-stream.png?downloads=true&stars=true)](https://nodei.co/npm/prop-stream)

## Usage

You can control which properties may exist on objects passing through an obj stream with a `whitelist`:

```javascript
var through = require('through2'),
    stream = require('prop-stream');

// set up a pipeline
var pip = stream.whitelist( [ 'id', 'name', 'hat_size' ] )
  .pipe( through.obj( function( chunk, enc, next ){
    console.log( Object.keys( chunk ) );
    next();
  }));

// the 'arms' property will now be `deleted` from the object.
pip.write( { id: 1, name: 'peter', hat_size: 'medium', arms: 2 } );
```

There is also a `blacklist` which does the opposite.

## NPM Module

The `prop-stream` npm module can be found here:

[https://npmjs.org/package/prop-stream](https://npmjs.org/package/prop-stream)

## Contributing

Please fork and pull request against upstream master on a feature branch.

Pretty please; provide unit tests and script fixtures in the `test` directory.

### Running Unit Tests

```bash
$ npm test
```

### Continuous Integration

Travis tests every release against node version `0.10`

[![Build Status](https://travis-ci.org/pelias/prop-stream.png?branch=master)](https://travis-ci.org/pelias/prop-stream)