var bitgif = require('../');
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

var file = require('fs').createWriteStream(__dirname + '/octocat.gif');
bitgif(octocat).pipe(file);
