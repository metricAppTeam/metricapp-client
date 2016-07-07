(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TasksWidgetController
* @module metricapp
* @requires $location
* @requires TaskService
* @requires UserService
*
* @description
* Realizes the control layer for `tasks.widget.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TasksWidgetController', TasksWidgetController);

TasksWidgetController.$inject = ['$location', 'TaskService', 'UserService'];

function TasksWidgetController($location, TaskService, UserService) {

    var vm = this;

    _init();

    function _loadTasks(tskStart, tskN) {
        vm.loading = true;
        vm.success = false;
        TaskService.getNTasksFrom(tskStart, tskN).then(
            function(resolve) {
                vm.numtasks = resolve.numtasks;
                var tasks = resolve.tasks;
                var assignees = [];
                tasks.forEach(function(task) {
                    assignees.push(task.assignee);
                });
                return UserService.getUsersInArray(assignees).then(
                    function(resolve) {
                        var users = resolve.users;
                        tasks.forEach(function(task) {
                            var assignee = task.assignee;
                            if (users[assignee]) {
                                task.assignee = {};
                                for (var info in users[assignee]) {
                                    task.assignee[info] = users[assignee][info];
                                }
                                vm.tasks.push(task);
                            }
                        });
                        vm.success = true;
                    },
                    function(reject) {
                        vm.success = false;
                    }
                );
            },
            function(reject) {
                vm.success = false;
            }
        ).finally(function() {
            vm.loading = false;
        });
    }

    function _init() {
        vm.loading = true;
        vm.success = false;
        vm.tasks = [];
        vm.numtasks = 0;
        _loadTasks(0, 5);
    }

}

})();
