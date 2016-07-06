(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TasksController
* @module metricapp
* @requires $scope
* @requires $location
* @requires TaskService
*
* @description
* Realizes the control layer for `tasks.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TasksController', TasksController);

TasksController.$inject = ['$scope', '$location', 'TaskService'];

function TasksController($scope, $location, TaskService) {

    var vm = this;

    _init();

    function _loadTasks(tskStart, tskN) {
        vm.loading = true;
        vm.success = false;
        TaskService.getTasks(tskStart, tskN).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.tasks = [];
        vm.numtasks = 0;
        _loadTasks(0, 20);
    }

}

})();
