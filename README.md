ndarray-1bit-gif
================

Creates 1-bit GIF-images from an ndarray of bits

[![Build Status](https://travis-ci.org/rexxars/ndarray-1bit-gif.svg?branch=master)](https://travis-ci.org/rexxars/ndarray-1bit-gif)

# Usage

``` js
var bitgif = require('ndarray-1bit-gif');
bitgif(ndarray[, options = {}]); // Returns a stream
```

`options` currently has one option:
  - `invert` (boolean) - Inverts the colors

# Installing

Install the library using [npm](http://npmjs.org):

```sh
npm install ndarray-1bit-gif
```

# Example

``` js
var bitgif = require('ndarray-1bit-gif');
var ndbits = require('ndarray-bit');

var input = [
    3758618655,
    2481045507,
    670087161,
    4293984240,
    4293984240,
    2281244664,
    3221455841,
    4162838535,
    0
];

var octocat = ndbits([16, 16]);
octocat.data.bits.set(input);

var file = require('fs').createWriteStream('octocat.gif');
bitgif(octocat).pipe(file);
```

Writes something beautiful to `octocat.gif`, like this:

![The Octocat](/example/octocat.gif?raw=true "Octocat, copyright Github")
