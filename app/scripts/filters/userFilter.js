'use strict';

angular.module('angularDemoApp')
  .filter('reverse', function () {
    return function (arr) {
      return {message: "From Method", bb: arr.reverse()};
    };
  });
