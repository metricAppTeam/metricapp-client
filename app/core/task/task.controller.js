(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TaskController
* @module metricapp
* @requires $scope
* @requires $location
* @requires $routeParams
* @requires TaskService
*
* @description
* Realizes the control layer for `task.view`
*************************************.***********************************************/

angular.module('metricapp')

.controller('TaskController', TaskController);

TaskController.$inject = ['$scope', '$location', '$routeParams', 'TaskService'];

function TaskController($scope, $location, $routeParams, TaskService) {

    var vm = this;

    _init();

    function _loadTask(taskid) {
        vm.loading = true;
        vm.success = false;
        TaskService.getTask(taskid).then(
            function(response) {
                vm.loading = false;
                vm.success = true;
            }
        );
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        if (!$routeParams.taskid) {
            $location.path('/tasks');
        }
        vm.currTask = {
            id: $routeParams.taskid
        };
        _loadTask(vm.currTask.id);
    }

}

})();
