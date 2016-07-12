(function () {
  'use strict';

  angular.module('metricapp')
      .directive('metricDashboard', metricDashboard);

  function metricDashboard() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metricator/metricDashboard.view.html'
    };
  }

})();
