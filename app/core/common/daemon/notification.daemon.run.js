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
    $rootScope.notifications = $rootScope.notifications || [];

}

})();
