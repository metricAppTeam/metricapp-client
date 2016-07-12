(function () { 'use strict';

angular.module('metricapp')

.directive('topbar', topbar);

function topbar() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'TopbarController as vm',
      templateUrl: 'dist/views/navigation/topbar/topbar.view.html'
    };
}

})();