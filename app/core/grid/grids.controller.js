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

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.grids = vm.grids.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllGrids() {
        vm.loading = true;
        vm.success = false;
        GridService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.grids);
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
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
        vm.data = [];
        vm.buffer = [];
        vm.grids = [];
        vm.idx = 0;
        vm.step = 5;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllGrids();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.grids = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();
