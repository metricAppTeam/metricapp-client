(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name GoalsController
* @module metricapp
* @requires $scope
* @requires $location
* @requires GoalService
*
* @description
* Realizes the control layer for `goals.view`.
************************************************************************************/

angular.module('metricapp')

.controller('GoalsController', GoalsController);

GoalsController.$inject = ['$scope', '$location', 'GoalService'];

function GoalsController($scope, $location, GoalService) {

    var vm = this;

    _init();

    function _loadGoals(goaStart, goaN) {
        vm.loading = true;
        vm.success = false;
        GoalService.getGoals(goaStart, goaN).then(
            function(response) {
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
        _loadGoals(0, 20);
    }

}

})();
