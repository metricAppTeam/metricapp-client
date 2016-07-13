(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationsWidgetController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $filter
* @requires NotificationService
* @requires UserService
* @requires AuthService
* @requires AUTH_EVENTS
* @requires NOTIFICATION_EVENTS
*
* @description
* Realizes the control layer for `notifications.widget.view`.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationsWidgetController', NotificationsWidgetController);

NotificationsWidgetController.$inject = ['$scope', '$rootScope', '$location', '$filter', 'NotificationService', 'UserService', 'AuthService', 'AUTH_EVENTS', 'NOTIFICATION_EVENTS'];

function NotificationsWidgetController($scope, $rootScope, $location, $filter, NotificationService, UserService, AuthService, AUTH_EVENTS, NOTIFICATION_EVENTS) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    vm.setRead = setRead;
    vm.setAllRead = setAllRead;
    vm.removeNews = removeNews;

    _init();

    function setRead(notificationid) {
        for (var i = 0; i < vm.buffer.length; i++) {
            var notification = vm.buffer[i];
            if (notification.id === notificationid) {
                if (!notification.read) {
                    notification.read = true;
                    vm.toread --;
                }
            }
        }
        NotificationService.setReadById(notificationid);
        $rootScope.$broadcast(NOTIFICATION_EVENTS.SET_READ, notificationid);
    }

    function setAllRead() {
        vm.buffer.forEach(function(notification) {
            notification.read = true;
        });
        vm.toread = 0;
        NotificationService.setAllRead();
        $rootScope.$broadcast(NOTIFICATION_EVENTS.ALL_READ);
    }

    function removeNews() {
        vm.news = 0;
    }

    function loadMore() {
        if (vm.idx < vm.buffer.length) {
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.notifications = vm.notifications.concat(vm.buffer.slice(vm.idx, e));
            vm.idx = e;
        }
    }

    function search(query) {
        vm.buffer = $filter('orderBy')($filter('filter')(vm.data, query), vm.orderBy);
    }

    function _loadAllNotifications() {
        vm.loading = true;
        vm.success = false;
        NotificationService.getAll().then(
            function(resolve) {
                var notifications = resolve.notifications;
                vm.toread = resolve.toread;
                vm.news = resolve.news;
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
                                vm.data.push(notification);
                            }
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
        vm.notifications = [];
        vm.idx = 0;
        vm.step = 2;
        vm.query = '';
        vm.orderBy = '-ts_create';
        if (AuthService.isLogged()) {
            _loadAllNotifications();
        }
        $scope.$on(AUTH_EVENTS.LOGIN_SUCCESS, function() {
            _loadNotifications();
        });
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.notifications = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
        $scope.$on(NOTIFICATION_EVENTS.ALL_READ, function() {
            vm.buffer.forEach(function(notification) {
                notification.read = true;
            });
            vm.toread = 0;
        });
        $scope.$on(NOTIFICATION_EVENTS.SET_READ, function(event, notificationid) {
            for (var i = 0; i < vm.buffer.length; i++) {
                var notification = vm.buffer[i];
                if (notification.id === notificationid) {
                    if (!notification.read) {
                        notification.read = true;
                        vm.toread --;
                    }
                }
            }
        });
    }
    /*
    var vm = this;

    vm.setRead = setRead;
    vm.setAllRead = setAllRead;

    _init();

    function setRead(notificationid) {
        var i = vm.notifications.indexOf(function(notification) {
            return notification.id === notificationid;
        });
        if (i >= 0 && !vm.notifications[i].read) {
            vm.notifications[i].read = true;
            vm.toread--;
        }
        NotificationService.setReadById(notificationid);
        $rootScope.$broadcast(NOTIFICATION_EVENTS.SET_READ, notificationid);
    }

    function setAllRead() {
        vm.notifications.forEach(function(notification) {
            notification.read = true;
        });
        vm.toread = 0;
        NotificationService.setAllRead();
        $rootScope.$broadcast(NOTIFICATION_EVENTS.ALL_READ);
    }

    function _loadNotifications(ntfStart, ntfN) {
        vm.loading = true;
        vm.success = false;
        NotificationService.getNFrom(ntfStart, ntfN).then(
            function(resolve) {
                var notifications = resolve.notifications;
                vm.news = resolve.news;
                vm.toread = resolve.toread;
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
        $scope.$on(NOTIFICATION_EVENTS.ALL_READ, function() {
            vm.notifications.forEach(function(notification) {
                notification.read = true;
            });
            vm.toread = 0;
        });
        $scope.$on(NOTIFICATION_EVENTS.SET_READ, function(event, notificationid) {
            var i = vm.notifications.indexOf(function(notification) {
                return notification.id === notificationid;
            });
            if (i >= 0 && !vm.notifications[i].read) {
                vm.notifications[i].read = true;
                vm.toread--;
            }
        });
    }*/

}

})();
