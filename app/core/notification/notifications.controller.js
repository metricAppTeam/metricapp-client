(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationsController
* @module metricapp
* @requires $location
* @requires NotificationService
* @requires UserService
*
* @description
* Realizes the control layer for `notifications.view`.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationsController', NotificationsController);

NotificationsController.$inject = ['$location', 'NotificationService', 'UserService'];

function NotificationsController($location, NotificationService, UserService) {

    var vm = this;

    _init();

    function _loadNotifications(ntfStart, ntfN) {
        vm.loading = true;
        vm.success = false;
        NotificationService.getNNotificationsFrom(ntfStart, ntfN).then(
            function(resolve) {
                vm.news = resolve.news;
                vm.toread = resolve.toread;
                var notifications = resolve.notifications;
                var authors = [];
                notifications.forEach(function(notification) {
                    authors.push(notification.author);
                });
                return UserService.getUsersInArray(authors).then(
                    function(resolve) {
                        var users = resolve.users;
                        notifications.forEach(function(notification) {
                            if (users[author]) {
                                notification.author = {};
                                for (var info in users[author]) {
                                    notification.author[info] = users[author][info];
                                }
                                vm.notifications.push(notification);
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
        vm.notifications = [];
        vm.news = 0;
        vm.toread = 0;
        _loadNotifications(0, 20);
    }

}

})();
