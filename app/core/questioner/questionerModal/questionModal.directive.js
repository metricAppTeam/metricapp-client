(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionModal', questionModal);

  function questionModal() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionModal.view.html'
    };
  }

})();