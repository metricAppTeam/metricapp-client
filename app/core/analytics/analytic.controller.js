(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name AnalyticController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires AnalyticService
*
* @description
* Realizes the control layer for `analytic.view`.
************************************************************************************/

angular.module('metricapp')

.controller('AnalyticController', AnalyticController);

AnalyticController.$inject = ['$scope', '$location', '$routeParams', 'AnalyticService'];

function AnalyticController($scope, $location, $routeParams, AnalyticService) {

    var vm = this;

    _init();

    function _loadAnalytic(analyticid) {
        vm.loading = true;
        vm.success = false;
        AnalyticService.getAnalytic(analyticid).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        if (!$routeParams.analyticid) {
            $location.path('/analytics');
        }
        vm.currAnalytic = {
            id: $routeParams.analyticid
        };
        _loadAnalytic(vm.currAnalytic.id);
    }

}

})();
