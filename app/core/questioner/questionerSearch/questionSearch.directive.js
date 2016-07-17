(function () {
  'use strict';

  angular.module('metricapp')
      .directive('questionSearch', questionSearch);

  function questionSearch() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/questioner/questionSearch.view.html'
    };
  }

})();