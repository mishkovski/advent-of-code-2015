
var expect = require('chai').expect;
var printResult = require('./print-result.js');
var readFile = require('../lib/read-file.js');
var day5 = require('../lib/day-5.js');
var getNiceCount = day5.getNiceCount;
var getNiceCountModified = day5.getNiceCountModified;

describe('day-5 - getNiceCount', function() {

  it('returns 1 for ugknbfddgicrmopn', function(done) {
    expect(getNiceCount('ugknbfddgicrmopn')).to.equal(1);
    done();
  });

  it('returns 1 for aaa', function(done) {
    expect(getNiceCount('aaa')).to.equal(1);
    done();
  });

  it('returns 0 for jchzalrnumimnmhp', function(done) {
    expect(getNiceCount('jchzalrnumimnmhp')).to.equal(0);
    done();
  });

  it('returns 0 for haegwjzuvuyypxyu', function(done) {
    expect(getNiceCount('haegwjzuvuyypxyu')).to.equal(0);
    done();
  });

  it('returns 0 for dvszwmarrgswjxmb', function(done) {
    expect(getNiceCount('dvszwmarrgswjxmb')).to.equal(0);
    done();
  });

  it('returns 2 for ugknbfddgicrmopn\\naaa\\njchzalrnumimnmhp\\nhaegwjzuvuyypxyu\\ndvszwmarrgswjxmb\\n', function(done) {
    expect(getNiceCount('ugknbfddgicrmopn\naaa\njchzalrnumimnmhp\nhaegwjzuvuyypxyu\ndvszwmarrgswjxmb\n')).to.equal(2);
    done();
  });

  it('returns for the second puzzle input', function(done) {
    var input = readFile('./test/day-5.input');
    printResult(getNiceCount(input), done);
  });
});

describe('day-5 - getNiceCountModified', function() {
  it('returns 1 for qjhvhtzxzqqjkmpb', function(done) {
    expect(getNiceCountModified('qjhvhtzxzqqjkmpb')).to.equal(1);
    done();
  });

  it('returns 1 for xxyxx', function(done) {
    expect(getNiceCountModified('xxyxx')).to.equal(1);
    done();
  });

  it('returns 0 for uurcxstgmygtbstg', function(done) {
    expect(getNiceCountModified('uurcxstgmygtbstg')).to.equal(0);
    done();
  });

  it('returns 0 for ieodomkazucvgmuy', function(done) {
    expect(getNiceCountModified('ieodomkazucvgmuy')).to.equal(0);
    done();
  });

  it('returns 2 for qjhvhtzxzqqjkmpb\\nxxyxx\\nuurcxstgmygtbstg\\nieodomkazucvgmuy', function(done) {
    expect(getNiceCountModified('qjhvhtzxzqqjkmpb\nxxyxx\nuurcxstgmygtbstg\nieodomkazucvgmuy')).to.equal(2);
    done();
  });

  it('returns for the second puzzle input', function(done) {
    var input = readFile('./test/day-5.input');
    printResult(getNiceCountModified(input), done);
  });
});
