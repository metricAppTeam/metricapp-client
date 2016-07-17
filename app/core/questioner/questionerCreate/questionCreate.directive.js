(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionCreate', questionCreate);

  function questionCreate() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionCreation.view.html'
    };
  }

})();