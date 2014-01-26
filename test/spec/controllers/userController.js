'use strict';

describe('Controller: UsercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDemoApp'));

  var UsercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsercontrollerCtrl = $controller('UsercontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
