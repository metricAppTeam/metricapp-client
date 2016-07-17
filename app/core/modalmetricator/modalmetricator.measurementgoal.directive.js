(function () {
  'use strict';

  angular.module('metricapp')
      .directive('modalmeasurementgoal', modalmeasurementgoal);

  function modalmeasurementgoal() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metricator/modal/modal.body.measurementgoal.html'
    };
  }

})();