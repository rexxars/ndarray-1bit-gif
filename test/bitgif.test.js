'use strict';

var bitgif   = require('../'),
    fixtures = require('./fixtures'),
    ndbits   = require('ndarray-bit'),
    concat   = require('concat-stream'),
    test     = require('tape');

test('throws exception if not passed ndarray', function(t) {
    t.throws(function() {
        bitgif('moo');
    });

    t.end();
});

test('generates correct gif for simple data', function(t) {
    var bits = ndbits([2, 2]);
    bits.set(0, 0, true);
    bits.set(1, 1, true);

    bitgif(bits).pipe(concat(function(data) {
        t.equal(data.toString('hex'), fixtures['simple-2x2']);
        t.end();
    }));
});

test('can invert colors', function(t) {
    var bits = ndbits([2, 2]);
    bits.set(0, 0, true);
    bits.set(1, 1, true);

    bitgif(bits, { invert: true }).pipe(concat(function(data) {
        t.equal(data.toString('hex'), fixtures['simple-2x2-inverted']);
        t.end();
    }));
});
