(function () {
  'use strict';

  angular.module('metricapp')
      .directive('page', page);

  function page() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/page/page.view.html'
    };
  }

})();