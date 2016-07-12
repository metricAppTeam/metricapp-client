(function () {
  'use strict';

  angular.module('metricapp')
      .directive('measurementgoalsearch', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoalsearch.view.html'
    };
  }

})();