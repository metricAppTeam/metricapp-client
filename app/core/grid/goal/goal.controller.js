(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GoalController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires GoalService
*
* @description
* Realizes the control layer for `goal.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GoalController', GoalController);

GoalController.$inject = ['$scope', '$location', '$routeParams', 'GoalService'];

function GoalController($scope, $location, $routeParams, GoalService) {

    var vm = this;

    _init();

    function _loadGoal(goalid) {
        vm.loading = true;
        vm.success = false;
        GoalService.getGoal(goalid).then(
            function(response) {
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
        vm.currGoal = {
            id: $routeParams.goalid
        };
        _loadGoal(vm.currGoal.id);
    }

}

})();
