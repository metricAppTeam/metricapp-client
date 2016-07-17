(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionerDashboard', questionerDashboard);

  function questionerDashboard() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionerDashboard.view.html'
    };
  }

})();