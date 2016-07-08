(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name ChatController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires MessageService
* @requires UserService
*
* @description
* Realizes the control layer for `chat.view`
*************************************.***********************************************/

angular.module('metricapp')

.controller('ChatController', ChatController);

ChatController.$inject = ['$location', '$routeParams', 'MessageService', 'UserService'];

function ChatController($location, $routeParams, MessageService, UserService) {

    var vm = this;

    _init();

    function _loadTask(taskid) {
        vm.loading = true;
        vm.success = false;
        TaskService.getTask(taskid).then(
            function(resolve) {
                vm.currTask.id = resolve.task.id;
                vm.currTask.name = resolve.task.name;
                vm.currTask.description = resolve.task.description;
                vm.currTask.assignee = {};
                vm.currTask.ts_create = resolve.task.ts_create;
                vm.currTask.ts_update = resolve.task.ts_update;
                return UserService.getUser(resolve.task.author).then(
                    function(resolve) {
                        for (var info in resolve.user) {
                            vm.currTask.assignee[info] = resolve.user[info];
                        }
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
        if (!$routeParams.taskid) {
            $location.path('/tasks');
        }
        vm.currTask = {
            id: $routeParams.taskid,
            name: null,
            description: null,
            assignee: null,
            progress: null,
            ts_create: null,
            ts_update: null
        };
        _loadTask(vm.currTask.id);
    }

}

})();
