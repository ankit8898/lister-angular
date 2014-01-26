'use strict';

angular.module('angularDemoApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/users', {templateUrl: 'views/user.html', controller: 'UsercontrollerCtrl'})
      .otherwise({
        redirectTo: '/users'
      });
  });
