(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GridsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires GridService
*
* @description
* Realizes the control layer for `grids.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GridsController', GridsController);

GridsController.$inject = ['$scope', '$location', 'GridService'];

function GridsController($scope, $location, GridService) {

    var vm = this;

    _init();

    function _loadGrids(grdStart, grdN) {
        vm.loading = true;
        vm.success = false;
        GridService.getGrids(grdStart, grdN).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.grids = [];
        vm.numgrids = 0;
        _loadGrids(0, 20);
    }

}

})();
