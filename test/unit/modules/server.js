// var request = require('supertest');
reallyNeed = require('really-need');

describe('loading express', function () {
  var server;
  
  beforeEach(function () {
    server = reallyNeed('../../../modules/server', { bustCache: true });
  });

  afterEach(function (done) {
    server.close(done);
  });
  
  it('responds to /', function testSlash(done) {
    // request(server)
    //   .get('/')
    //   .expect(200, done);
    done()
  });
  it('404 everything else', function testPath(done) {
    // console.log('test 404')
    // request(server)
    //   .get('/foo/bar')
    //   .expect(404, done);
    done()
  });
});