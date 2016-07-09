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
        TaskService.getNFrom(tskStart, tskN).then(
            function(resolve) {
                var tasks = resolve.tasks;
                var assignees = [];
                tasks.forEach(function(task) {
                    assignees.push(task.assignee);
                });
                return UserService.getInArray(authors).then(
                    function(resolve) {
                        var users = resolve.users;
                        tasks.forEach(function(task) {
                            var assignee = task.assignee;
                            task.assignee = angular.copy(users[assignee]);
                            if (task.assignee) vm.tasks.push(task);
                        });
                        vm.success = true;
                    },
                    function(reject) {
                        vm.errmsg = reject.errmsg;
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
        vm.errmsg = null;
        vm.tasks = [];
        _loadTasks(0, 5);
    }

}

})();
