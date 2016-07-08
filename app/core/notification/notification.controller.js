(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationController
* @module metricapp
* @requires $location
* @requires $routeParams
* @requires NotificationService
* @requires UserService
*
* @description
* Realizes the control layer for `notification.view`.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationController', NotificationController);

NotificationController.$inject = ['$location', '$routeParams', 'NotificationService', 'UserService'];

function NotificationController($location, $routeParams, NotificationService, UserService) {

    var vm = this;

    _init();

    function _loadNotification(notificationid) {
        vm.loading = true;
        vm.success = false;
        NotificationService.getNotification(notificationid).then(
            function(resolve) {
                vm.currNotification.id = resolve.notification.id;
                vm.currNotification.scope = resolve.notification.scope;
                vm.currNotification.name = resolve.notification.name;
                vm.currNotification.description = resolve.notification.description;
                vm.currNotification.author = {};
                vm.currNotification.href = resolve.notification.href;
                vm.currNotification.ts_create = resolve.notification.ts_create;
                vm.currNotification.read = resolve.notification.read;
                return UserService.getUser(resolve.notification.author).then(
                    function(resolve) {
                        for (var info in resolve.user) {
                            vm.currNotification.author[info] = resolve.user[info];
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
        if (!$routeParams.notificationid) {
            $location.path('/notifications');
        }
        vm.currNotification = {
            id: $routeParams.notificationid,
            scope: null,
            name: null,
            description: null,
            author:  null,
            href: null,
            ts_create: null,
            read: null
        };
        _loadNotification(vm.currNotification.id);
    }

}

})();
