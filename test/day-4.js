
var expect = require('chai').expect;
var printResult = require('./print-result.js');
var day4 = require('../lib/day-4.js');
var findNumber = day4.findNumber;

describe('day-4 - findNumber', function() {
  this.timeout(150000);

  var leadingZerosString = '00000';

  it('returns 609043 for abcdef', function(done) {
    expect(findNumber('abcdef', leadingZerosString)).to.equal(609043);
    done();
  });

  it('returns 1048970 for pqrstuv', function(done) {
    expect(findNumber('pqrstuv', leadingZerosString)).to.equal(1048970);
    done();
  });

  it('returns for the puzzle input', function(done) {
    printResult(findNumber('yzbqklnj', leadingZerosString), done);
  });

  it('returns for the second puzzle input', function(done) {
    printResult(findNumber('yzbqklnj', '000000'), done);
  });
});
