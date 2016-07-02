(function () { 'use strict';

angular.module('metricapp')

.directive('sidebar', sidebar);

function sidebar() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'SidebarController as vm',
      templateUrl: 'dist/views/navigation/sidebar/sidebar.view.html'
    };
}

})();
