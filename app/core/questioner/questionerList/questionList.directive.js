(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionList', questionList);

  function questionList() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionList.view.html'
    };
  }

})();