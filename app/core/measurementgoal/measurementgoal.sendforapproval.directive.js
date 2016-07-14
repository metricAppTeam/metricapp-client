/*
* @Author: alessandro.fazio
* @Date:   2016-07-14 16:38:56
* @Last Modified by:   alessandro.fazio
* @Last Modified time: 2016-07-14 16:39:58
*/

(function () {
  'use strict';

  angular.module('metricapp')
      .directive('measurementgoalsendforapproval', metricator);

  function metricator() {
    return {
      restrict: 'E',
      templateUrl: 'dist/views/measurementgoal/measurementgoal.sendforapproval.view.html'
    };
  }

})();
