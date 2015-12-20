var expect = require('chai').expect;
var readFile = require('../lib/read-file.js');

describe('readFile', function() {
  it('returns file content', function(done) {
    expect(readFile('./test/day-2.input').substring(0,7)).to.equal("3x11x24");
    done();
  });
});
