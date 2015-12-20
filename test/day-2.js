var expect = require('chai').expect;

var readFile = require('../lib/read-file.js');

var day2 = require('../lib/day-2.js');
var printResult = require('./print-result.js');

var findSurface = day2.findSurface;
var findLength = day2.findLength;

describe('day-2 - findSurface', function() {
  it('returns 58 for 2x3x4', function(done) {
    expect(findSurface('2x3x4')).to.equal(58);
    done();
  });

  it('returns 43 for 1x1x10', function(done) {
    expect(findSurface('1x1x10')).to.equal(43);
    done();
  });

  it('returns 101 for 2x3x4\\n1x1x10', function(done) {
    expect(findSurface('2x3x4\n1x1x10')).to.equal(101);
    done();
  });

  it('returns 144 for 2x3x4\\n1x1x10\\n1x1x10', function(done) {
    expect(findSurface('2x3x4\n1x1x10\n1x1x10')).to.equal(144);
    done();
  });

  it('returns for the puzzle input', function(done) {
    var input = readFile('./test/day-2.input');

    printResult(findSurface(input), done);
  });
});

describe('day-2 - findLength', function() {
  it('returns 34 for 2x3x4', function(done) {
    expect(findLength('2x3x4')).to.equal(34);
    done();
  });

  it('returns 14 for 1x1x10', function(done) {
    expect(findLength('1x1x10')).to.equal(14);
    done();
  });


  it('returns for the puzzle input', function(done) {
    var input = readFile('./test/day-2.input');

    printResult(findLength(input), done);
  });
});
