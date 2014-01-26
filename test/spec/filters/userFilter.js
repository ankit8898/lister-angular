'use strict';

describe('Filter: userFilter', function () {

  // load the filter's module
  beforeEach(module('angularDemoApp'));

  // initialize a new instance of the filter before each test
  var userFilter;
  beforeEach(inject(function ($filter) {
    userFilter = $filter('userFilter');
  }));

  it('should return the input prefixed with "userFilter filter:"', function () {
    var text = 'angularjs';
    expect(userFilter(text)).toBe('userFilter filter: ' + text);
  });

});
