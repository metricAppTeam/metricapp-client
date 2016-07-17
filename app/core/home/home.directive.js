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

  angular.module('metricapp')
      .directive('viewmetricatordashboard', viewmetricatordashboard);

  function viewmetricatordashboard() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/home/metricatordashboard/metricatordashboard.view.html'
    };
  }


})();