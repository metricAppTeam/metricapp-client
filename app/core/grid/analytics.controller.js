(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GridAnalyticsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires GridService
*
* @description
* Realizes the control layer for `grid.analytics.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GridAnalyticsController', GridAnalyticsController);

GridAnalyticsController.$inject = ['$scope', '$location', '$routeParams', 'GridService'];

function GridAnalyticsController($scope, $location, $routeParams, GridService) {

    var vm = this;

    _init();

    function _loadGrid(gridid) {
        vm.loading = true;
        vm.success = false;
        GridService.getById(gridid).then(
            function(response) {
                vm.currGrid = angular.copy(resolve.grid);
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
        vm.currGrid = {
            id: $routeParams.gridid
        };
        _loadGrid(vm.currGrid.id);
    }

}

})();
