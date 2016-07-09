(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GoalsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $filter
* @requires GoalService
*
* @description
* Realizes the control layer for `goals.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GoalsController', GoalsController);

GoalsController.$inject = ['$scope', '$location', '$filter', 'GoalService'];

function GoalsController($scope, $location, $filter, GoalService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.goals = vm.goals.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllGoals(goaStart, goaN) {
        vm.loading = true;
        vm.success = false;
        GoalService.getGoals(goaStart, goaN).then(
            function(resolve) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.goals = [];
        vm.numgoals = 0;
        _loadAllGoals();
    }

}

})();
