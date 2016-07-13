(function() {  'use strict';

/************************************************************************************
* @ngdoc controller
* @name NotificationsController
* @module metricapp
* @requires $scope
* @requires $rootScope
* @requires $location
* @requires $filter
* @requires NotificationService
* @requires UserService
* @requires NOTIFICATION_EVENTS
*
* @description
* Realizes the control layer for `notifications.view`.
************************************************************************************/

angular.module('metricapp')

.controller('NotificationsController', NotificationsController);

NotificationsController.$inject = ['$scope', '$rootScope', '$location', '$filter', 'NotificationService', 'UserService', 'AuthService', 'NOTIFICATION_EVENTS', 'AUTH_EVENTS'];

function NotificationsController($scope, $rootScope, $location, $filter, NotificationService, UserService, AuthService, NOTIFICATION_EVENTS, AUTH_EVENTS) {

    var vm = this;

    vm.loadMore = loadMore;
    vm.search = search;

    vm.setRead = setRead;
    vm.setAllRead = setAllRead;
    vm.removeNews = removeNews;

    _init();

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
        vm.news = 0;
        NotificationService.setAllRead();
        $rootScope.$broadcast(NOTIFICATION_EVENTS.ALL_READ);
    }

    function removeNews() {
        vm.news = 0;
    }

    function _loadAllNotifications() {
        vm.loading = true;
        vm.success = false;
        NotificationService.getAll().then(
            function(resolve) {
                var notifications = resolve.notifications;
                vm.toread = resolve.toread;
                vm.news = resolve.news;
                notifications.forEach(function(notification) {
                    vm.data.push(notification);
                });
                vm.buffer = $filter('orderBy')(vm.data, vm.orderBy);
                vm.success = true;
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
        vm.toread = 0;
        vm.news = 0;
        vm.idx = 0;
        vm.step = 1;
        vm.query = '';
        vm.orderBy = '-ts_create';
        _loadAllNotifications();
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
            vm.news = 0;
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

}

})();
