'use strict';

describe('Service: datum', function () {

  // load the service's module
  beforeEach(module('angularDemoApp'));

  // instantiate service
  var datum;
  beforeEach(inject(function (_datum_) {
    datum = _datum_;
  }));

  it('should do something', function () {
    expect(!!datum).toBe(true);
  });

});
