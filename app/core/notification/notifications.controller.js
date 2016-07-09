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

    vm.loadMore = loadMore;
    vm.search = search;

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

    function _loadAllNotifications() {
        vm.loading = true;
        vm.success = false;
        NotificationService.getAll().then(
            function(resolve) {
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
                            if (notification.author) vm.data.push(notification);
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
        vm.step = 5;
        vm.query = '';
        vm.orderBy = '-ts_create';
        _loadAllNotifications();
        $scope.$watch('vm.buffer', function() {
            vm.idx = 0;
            var e = Math.min(vm.idx + vm.step, vm.buffer.length);
            vm.notifications = vm.buffer.slice(vm.idx, e);
            vm.idx = e;
        });
    }

}

})();
