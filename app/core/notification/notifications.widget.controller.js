(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationsWidgetController
* @module metricapp
* @requires $scope
* @requires $location
* @requires NotificationService
* @requires UserService
* @requires AuthService
* @requires AUTH_EVENTS
*
* @description
* Realizes the control layer for `notifications.widget.view`.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationsWidgetController', NotificationsWidgetController);

NotificationsWidgetController.$inject = ['$scope', '$location', 'NotificationService', 'UserService', 'AuthService', 'AUTH_EVENTS'];

function NotificationsWidgetController($scope, $location, NotificationService, UserService, AuthService, AUTH_EVENTS) {

    var vm = this;

    _init();

    function _loadNotifications(ntfStart, ntfN) {
        vm.loading = true;
        vm.success = false;
        NotificationService.getNFrom(ntfStart, ntfN).then(
            function(resolve) {
                vm.news = resolve.news;
                vm.toread = resolve.toread;
                var notifications = resolve.notifications;
                var authors = [];
                notifications.forEach(function(notification) {
                    authors.push(notification.author);
                });
                return UserService.getInArray(authors).then(
                    function(resolve) {
                        var users = resolve.users;
                        notifications.forEach(function(notification) {
                            var author = notification.author;
                            notification.author = angular.copy(users[author]);
                            if (notification.author) {
                                vm.notifications.push(notification);
                            }
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
        vm.notifications = [];
        vm.news = 0;
        vm.toread = 0;
        if (AuthService.isLogged()) {
            _loadNotifications(0, 5);
        }
        $scope.$on(AUTH_EVENTS.LOGIN_SUCCESS, function() {
            _loadNotifications(0, 5);
        });
    }

}

})();
