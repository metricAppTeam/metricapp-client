(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name AnalyticsController
* @module metricapp
* @requires $scope
* @requires $location
*
* @description
* Manages the Analytics.
* Realizes the control layer for `analytics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('AnalyticsController', AnalyticsController);

AnalyticsController.$inject = ['$scope', '$location'];

function AnalyticsController($scope, $location) {

    var vm = this;

    _init();

    function _init() {
        vm.loading = true;
        // initializations
        vm.loading = false;
    }
}

})();
