(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name NotificationService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires UserService
* @requires REST_SERVICE
*
* @description
* Provides authentication services.
************************************************************************************/

angular.module('metricapp')

.service('NotificationService', NotificationService);

NotificationService.$inject = ['$http', '$cookies', '$q', 'REST_SERVICE', 'DB_NOTIFICATIONS'];

function NotificationService($http, $cookies, $q, REST_SERVICE, DB_NOTIFICATIONS) {

    var service = this;

    service.getNotification = getNotification;
    service.getNNotificationsFrom = getNNotificationsFrom;
    service.cleanNews = cleanNews;

    /********************************************************************************
    * @ngdoc method
    * @name getNotification
    * @description
    * Retrieves the specified notification for authuser.
    * @param {Int} notificationid The nontification id.
    * @returns {Notification|Error} On success, the notification; an error message,
    * otherwise.
    ********************************************************************************/
    function getNotification(notificationid) {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                if (DB_NOTIFICATIONS[username]) {
                    var NOTIFICATIONS = DB_NOTIFICATIONS[username].notifications;
                    NOTIFICATIONS.forEach(function(NOTIFICATION) {
                        if (NOTIFICATION.id === notificationid) {
                            resolve({notification: NOTIFICATION});
                            return;
                        }
                    });
                    reject('Notifications ' + notificationid + 'not found for user ' + username);
                } else {
                    reject('Notifications not found for user ' + username);
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNNotificationsFrom
    * @description
    * Retrieves the specified notifications for authuser.
    * @param {Int} ntfStart First notification index.
    * @param {Int} ntfN Number of notifications.
    * @returns {[Notification]|Error} On success, the list of notifications with
     * meta for authuser; an error, otherwise.
    ***************************************************************************/
    function getNNotificationsFrom(ntfStart, ntfN) {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                if (DB_NOTIFICATIONS[username]) {
                    var news = DB_NOTIFICATIONS[username].news;
                    var NOTIFICATIONS = DB_NOTIFICATIONS[username].notifications;
                    var notifications = [];
                    var toread = 0;
                    var numnotifications = NOTIFICATIONS.length;
                    var end = (ntfN == -1) ? numnotifications:Math.min(ntfStart + ntfN, numnotifications);
                    for (var i = ntfStart; i < end; i++) {
                      notifications.push(NOTIFICATIONS[i]);
                      if (!NOTIFICATIONS[i].read) {
                          toread++;
                      }
                    }
                    resolve({notifications: notifications, news: news, toread: toread});
                    /*DB_NOTIFICATIONS[username].notifications.news =
                    Math.max(DB_NOTIFICATIONS[username].notifications.news - ntfN, 0);
                    */
                } else {
                    reject('Notifications not found for user ' + username);
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name cleanNews
    * @description
    * Set to zero the number of notifications news.
    * @returns {[RichNotification]|Error} On success, the list of notifications with
     * meta for authuser; an error, otherwise.
    ***************************************************************************/
    function cleanNews() {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                resolve({}); // TO BE IMPLEMENTED
            }, 500);
        });
    }

}

})();
