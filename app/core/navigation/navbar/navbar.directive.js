(function () {
  'use strict';

  angular.module('metricapp')
      .directive('navbar', navbar);

  function navbar() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/navigation/navbar/navbar.view.html'
    };
  }

})();