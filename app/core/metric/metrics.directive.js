(function () {
  'use strict';

  angular.module('metricapp')
      .directive('metrics', metrics);

  function metrics() {
    return {
      restrict: 'E',
      templateUrl: 'dist/metric/metrics.view.html'
    };
  }

  angular.module('metricapp')
      .directive('widget', widget);

  function widget() {
    return {
      restrict: 'E',
      templateUrl: 'dist/metric/metric.view.html'
    };
  }
})();
