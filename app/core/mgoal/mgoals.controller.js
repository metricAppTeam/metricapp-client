(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name MGoalsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires MGoalService
*
* @description
* Realizes the control layer for `mgoals.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MGoalsController', MGoalsController);

MGoalsController.$inject = ['$scope', '$location', '$filter', 'MGoalService'];

function MGoalsController($scope, $location, $filter, MGoalService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.mgoals = vm.mgoals.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllMGoals() {
        vm.loading = true;
        vm.success = false;
        MGoalService.getAll().then(
            function(resolve) {
                vm.data = angular.copy(resolve.mgoals);
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
        vm.mgoals = [];
        vm.idx = 0;
        vm.step = 4;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllMGoals();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.mgoals = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();
