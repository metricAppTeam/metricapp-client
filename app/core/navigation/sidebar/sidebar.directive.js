(function () {
  'use strict';

  angular.module('metricapp')
      .directive('sidebar', sidebar);

  function sidebar() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/navigation/sidebar/sidebar.view.html'
    };
  }

})();