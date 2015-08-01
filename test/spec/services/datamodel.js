'use strict';

describe('Service: datamodel', function () {

  // load the service's module
  beforeEach(module('lastfmApp'));

  // instantiate service
  var datamodel;
  beforeEach(inject(function (_datamodel_) {
    datamodel = _datamodel_;
  }));

  it('should do something', function () {
    expect(!!datamodel).toBe(true);
  });

});
