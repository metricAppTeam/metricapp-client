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

  angular.module('metricapp')
      .directive('metricupdate', metricupdate);
  function metricupdate() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metric/metricupdate.view.html'
    };
  }

  angular.module('metricapp')
      .directive('metricread', metricread);
  function metricread() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metric/metricread.view.html'
    };
  }


})();
