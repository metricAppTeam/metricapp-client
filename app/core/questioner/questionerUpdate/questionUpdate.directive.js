(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionUpdate', questionUpdate);

  function questionUpdate() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionUpdate.view.html'
    };
  }

})();