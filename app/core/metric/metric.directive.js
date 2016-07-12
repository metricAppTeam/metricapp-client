(function () {
  'use strict';

  angular.module('metricapp')
      .directive('metric', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metric/metric.view.html'
    };
  }

})();
