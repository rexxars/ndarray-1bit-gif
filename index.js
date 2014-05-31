'use strict';

var GifEncoder = require('gif-encoder');
var isndarray = require('isndarray');

module.exports = function(arr, options) {
    if (!isndarray(arr)) {
        throw Error('Input must be an ndarray');
    }

    var opts = options || {};
    
    // Prepare colors
    var colors = [
        opts.invert ? 0 : 255,
        opts.invert ? 255 : 0
    ];

    // Get array shape
    var nx = arr.shape[0],
        ny = arr.shape[1];

    // Prepare the output array
    var pixels = new Array(nx * ny * 4),
        offset = 0;

    // Loop through the bits and assign pixels
    var x, y, color;
    for (y = 0; y < ny; y++) {
        for (x = 0; x < nx; x++) {
            color = arr.get(x, y) ? colors[1] : colors[0];

            pixels[offset]     = color; // R
            pixels[offset + 1] = color; // G
            pixels[offset + 2] = color; // B
            pixels[offset + 3] = 255;   // A

            offset += 4;
        }
    }

    // Create the GIF
    var gif = new GifEncoder(nx, ny);
    gif.writeHeader();
    gif.addFrame(pixels);
    gif.finish();

    return gif;
};