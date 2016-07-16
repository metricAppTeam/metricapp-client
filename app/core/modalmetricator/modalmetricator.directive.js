(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionModal', questionModal);

  function questionModal() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/metricator/modal/modal.measurementgoal.html'
    };
  }

})();