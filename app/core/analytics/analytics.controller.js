(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name AnalyticsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires AnalyticService
*
* @description
* Realizes the control layer for `analytics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('AnalyticsController', AnalyticsController);

AnalyticsController.$inject = ['$scope', '$location', 'AnalyticService'];

function AnalyticsController($scope, $location, AnalyticService) {

    var vm = this;

    _init();

    function _loadAnalytics(anaStart, anaN) {
        vm.loading = true;
        vm.success = false;
        AnalyticService.getAnalytics(anaStart, anaN).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.analytics = [];
        vm.numanalytics = 0;
        _loadAnalytics(0, 20);
    }

}

})();