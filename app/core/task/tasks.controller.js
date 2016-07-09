(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name TasksController
* @module metricapp
* @requires $scope
* @requires $filter
* @requires $location
* @requires TaskService
* @requires UserService
*
* @description
* Realizes the control layer for `tasks.view`.
************************************************************************************/

angular.module('metricapp')

.controller('TasksController', TasksController);

TasksController.$inject = ['$scope', '$filter', '$location', 'TaskService', 'UserService'];

function TasksController($scope, $filter, $location, TaskService, UserService) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    _init();

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.tasks = vm.tasks.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllTasks() {
        vm.loading = true;
        vm.success = false;
        TaskService.getAll().then(
            function(resolve) {
                var tasks = resolve.tasks;
                var assignees = [];
                tasks.forEach(function(task) {
                    assignees.push(task.assignee);
                });
                return UserService.getInArray(assignees).then(
                    function(resolve) {
                        var users = resolve.users;
                        tasks.forEach(function(task) {
                            var assignee = task.assignee;
                            task.assignee = angular.copy(users[assignee]);
                            if (task.assignee) vm.data.push(task);
                        });
                        vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
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
        vm.data = [];
        vm.buffer = [];
        vm.tasks = [];
        vm.idx = 0;
        vm.step = 5;
        vm.query = '';
        vm.orderBy = 'name';
        _loadAllTasks();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.tasks = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();
