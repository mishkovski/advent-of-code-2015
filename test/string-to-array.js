var expect = require('chai').expect;
var getArray = require('../lib/string-to-array.js');

describe('getArray', function() {
  it('returns correct array for 3x11x24\\n27x1x11\\n14x6x11', function(done) {
    var content = "3x11x24\n27x1x11\n14x6x11";
    var resultArray = getArray(content, /\r?\n/);
    expect(resultArray[0]).to.equal("3x11x24");
    expect(resultArray[1]).to.equal("27x1x11");
    expect(resultArray[2]).to.equal("14x6x11");
    done();
  });

  it('returns correct array for 3x11x24', function(done) {
    var content = "3x11x24";
    var resultArray = getArray(content, "x");
    expect(resultArray[0]).to.equal("3");
    expect(resultArray[1]).to.equal("11");
    expect(resultArray[2]).to.equal("24");
    done();
  });
});
