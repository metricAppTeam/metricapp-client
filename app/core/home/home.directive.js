(function () {
  'use strict';

  angular.module('metricapp')
      .directive('viewexpertdashboard', viewexpertdashboard);

  function viewexpertdashboard() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/home/expertdashboard/expertdashboard.view.html'
    };
  }

})();