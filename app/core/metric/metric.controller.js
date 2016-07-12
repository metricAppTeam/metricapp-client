(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MetricController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires MetricService
*
* @description
* Realizes the control layer for `metric.view` and `update-metric.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MetricController', MetricController);

MetricController.$inject = ['$scope', '$location', '$routeParams', 'MetricService'];

function MetricController($scope, $location, $routeParams, MetricService) {

    var vm = this;

    _init();

    function _loadMetric(metricid) {
        vm.loading = true;
        vm.success = false;
        MetricService.getById(metricid).then(
            function(resolve) {
                vm.currMetric = angular.copy(resolve.metric);
                vm.updtMetric = angular.copy(vm.currMetric);
                vm.success = true;
            },
            function(reject) {
                vm.errmsg = reject.errmsg;
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.errmsg = null;
        if (!$routeParams.metricid) {
            $location.path('/metrics');
        }
        vm.currMetric = {
            id: $routeParams.metricid
        };
        _loadMetric(vm.currMetric.id);
    }
}

})();
