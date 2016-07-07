(function () {
  'use strict';

  angular.module('metricapp')
      .directive('measurementgoal', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoal.view.html'
    };
  }

})();
