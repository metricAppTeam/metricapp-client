(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name notificationDaemon
* @module metricapp
* @requires $rootScope
* @requires $interval
* @requires NotificationService
* @requires UserService
* @requires NOTIFICATION_EVENTS
*
* @description
* Pulls notifications as a daemon.
************************************************************************************/

angular.module('metricapp')

.run(notificationDaemon);

notificationDaemon.$inject = ['$rootScope', '$interval', 'NotificationService', 'UserService', 'NOTIFICATION_EVENTS'];

function notificationDaemon($rootScope, $interval, NotificationService, UserService, NOTIFICATION_EVENTS) {
    $rootScope.eventbox = $rootScope.eventbox || {news:0, toread:0, notifications:[], loading:false, success:true, errmsg:null};
/*
    function _loadAllNotifications() {
        NotificationService.getAll().then(
            function(resolve) {
                var notifications = resolve.notifications;
                $rootScope.eventbox.toread = resolve.toread;
                $rootScope.eventbox.news = resolve.news;
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
                                $rootScope.eventbox.notifications.push(notification);
                            }
                        });
                    },
                    function(reject) {
                        $rootScope.eventbox.errmsg = reject.errmsg;
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

    _loadAllNotifications();

    $interval(function() {
        _loadAllNotifications();
    }, 10000);
*/
}


})();
