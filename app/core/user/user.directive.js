(function () {
  'use strict';

  angular.module('metricapp')
      .directive('viewabout', viewabout);

  function viewabout() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/user/viewuserprofile/viewabout.view.html'
    };
  }

  angular.module('metricapp')
      .directive('viewprojects', viewprojects);

  function viewprojects() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/user/viewuserprofile/viewprojects.view.html'
    };
  }

  angular.module('metricapp')
      .directive('viewstatistics', viewstatistics);

  function viewstatistics() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/user/viewuserprofile/viewstatistics.view.html'
    };
  }

  angular.module('metricapp')
      .directive('vieweditprofile', vieweditprofile);

  function vieweditprofile() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/user/viewuserprofile/vieweditprofile.view.html'
    };
  }

  angular.module('metricapp')
      .directive('vieweditcredentials', vieweditcredentials);

  function vieweditcredentials() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/user/viewuserprofile/vieweditcredentials.view.html'
    };
  }

})();