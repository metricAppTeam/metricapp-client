(function () {
  'use strict';

  angular.module('metricapp')
      .directive('metricPage', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metric/metricpage.view.html'
    };
  }

})();
