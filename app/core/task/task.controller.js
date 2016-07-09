(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TaskController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires TaskService
* @requires UserService
*
* @description
* Realizes the control layer for `task.view`
*************************************.***********************************************/

angular.module('metricapp')

.controller('TaskController', TaskController);

TaskController.$inject = ['$location', '$routeParams', 'TaskService', 'UserService'];

function TaskController($location, $routeParams, TaskService, UserService) {

    var vm = this;

    _init();

    function _loadTask(taskid) {
        vm.loading = true;
        vm.success = false;
        TaskService.getById(taskid).then(
            function(resolve) {
                vm.currTask = angular.copy(resolve.task);
                return UserService.getById(vm.currTask.assignee).then(
                    function(resolve) {
                        vm.currTask.assignee = angular.copy(resolve.user);
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
                        vm.success = false;
                    }
                );
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
        vm.currTask = {
            id: $routeParams.taskid
        };
        _loadTask(vm.currTask.id);
    }

}

})();
