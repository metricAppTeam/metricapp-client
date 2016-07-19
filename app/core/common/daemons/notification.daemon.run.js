(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name notificationDaemon
* @module metricapp
* @requires $rootScope
* @requires $interval
* @requires NotificationService
* @requires UserService
* @requires AUTH_EVENTS
* @requires NOTIFICATION_EVENTS
*
* @description
* Pulls notifications as a daemon.
************************************************************************************/

angular.module('metricapp')

.run(notificationDaemon);

notificationDaemon.$inject = ['$rootScope', '$interval', 'NotificationService', 'UserService', 'AUTH_EVENTS', 'NOTIFICATION_EVENTS'];

function notificationDaemon($rootScope, $interval, NotificationService, UserService, AUTH_EVENTS, NOTIFICATION_EVENTS) {

    function _startPolling() {
        $rootScope.polling = $interval(function() {
            NotificationService.getNews().then(
                function(resolve) {
                    var newNotifications = resolve.notifications;
                    _broadcastNewNotifications(newNotifications);
                },
                function(reject) {
                    var errmsg = reject.errmsg;
                    alert(errmsg);
                }
            );
        }, 3000);
    }

    function _stopPolling() {
        if ($rootScope.polling) {
            $interval.cancel($rootScope.polling);
        }
    }
    /********************************************************************************
    * BROADCASTERS
    ********************************************************************************/
    function _broadcastNewNotifications(newNotifications) {
        $rootScope.$broadcast(NOTIFICATION_EVENTS.NEWS, newNotifications);
    }

    /********************************************************************************
    * WATCHERS
    ********************************************************************************/
    $rootScope.$on(AUTH_EVENTS.LOGIN_SUCCESS, function() {
        _startPolling();
    });

    $rootScope.$on(AUTH_EVENTS.LOGOUT_SUCCESS, function() {
        _stopPolling();
    });

}


})();
