(function () {
  'use strict';

  angular.module('metricapp')
      .directive('viewabout', viewabout);

  function viewabout() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/viewabout.view.html'
    };
  }

  angular.module('metricapp')
      .directive('viewprojects', viewprojects);

  function viewprojects() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/viewprojects.view.html'
    };
  }

  angular.module('metricapp')
      .directive('viewstatistics', viewstatistics);

  function viewstatistics() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/viewstatistics.view.html'
    };
  }

  angular.module('metricapp')
      .directive('vieweditprofile', vieweditprofile);

  function vieweditprofile() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/vieweditprofile.view.html'
    };
  }

  angular.module('metricapp')
      .directive('vieweditcredentials', vieweditcredentials);

  function vieweditcredentials() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/people/viewpersonalprofile/vieweditcredentials.view.html'
    };
  }

})();