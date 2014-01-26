'use strict';

angular.module('angularDemoApp')
  .factory('User', function ($resource) {
    // Service logic
    // ...

    //var r = {arr: [1,2,3,4,5,6,7], name: "From factory!"};
    return $resource('/api/users/:id');
    // Public API here
  
  });
