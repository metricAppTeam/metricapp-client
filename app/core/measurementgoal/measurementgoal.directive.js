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

  angular.module('metricapp')
      .directive('measurementgoalupdate', measurementgoalupdate);
  function measurementgoalupdate() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoal.update.view.html'
    };
  }

  angular.module('metricapp')
      .directive('measurementgoalread', measurementgoalread);
  function measurementgoalread() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoal.read.view.html'
    };
  }

})();
