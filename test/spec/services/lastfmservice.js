'use strict';

describe('Service: lastfmService', function () {

  // load the service's module
  beforeEach(module('lastfmApp'));

  // instantiate service
  var lastfmService;
  beforeEach(inject(function (_lastfmService_) {
    lastfmService = _lastfmService_;
  }));

  it('should do something', function () {
    expect(!!lastfmService).toBe(true);
  });

});
