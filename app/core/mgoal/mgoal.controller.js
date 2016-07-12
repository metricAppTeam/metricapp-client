(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name MGoalService
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires MGoalService
*
* @description
* Realizes the control layer for `mgoal.view` and `update-mgoal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('MGoalService', MGoalService);

MGoalService.$inject = ['$scope', '$location', '$routeParams', 'MGoalService'];

function MGoalService($scope, $location, $routeParams, MGoalService) {

    var vm = this;

    _init();

    function _loadMGoal(goalid) {
        vm.loading = true;
        vm.success = false;
        MGoalService.getById(goalid).then(
            function(resolve) {
                vm.currMGoal = angular.copy(resolve.mgoal);
                vm.updtMGoal = angular.copy(vm.currMGoal);
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
        if (!$routeParams.goalid) {
            $location.path('/mgoals');
            return;
        }
        vm.currMGoal = {
            id: $routeParams.goalid
        };
        _loadMGoal(vm.currMGoal.id);
    }
}

})();
