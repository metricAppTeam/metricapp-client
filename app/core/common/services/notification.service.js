(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name NotificationService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides authentication services.
************************************************************************************/

angular.module('metricapp')

.service('NotificationService', NotificationService);

NotificationService.$inject = ['$http', '$cookies', '$q', 'REST_SERVICE', 'AuthService', 'DB_NOTIFICATIONS'];

function NotificationService($http, $cookies, $q, REST_SERVICE, AuthService, DB_NOTIFICATIONS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
    service.getNFrom = getNFrom;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the notifications for authuser;
    * @returns {[Task]|Error} On success, the tasks;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            var authusername = AuthService.getUsername();
            if (!authusername) {
                reject({errmsg: 'User not logged'});
            }
            setTimeout(function() {
                var INBOX = DB_NOTIFICATIONS[authusername];
                if (INBOX) {
                    var NOTIFICATIONS = INBOX.notifications;
                    resolve({notifications: NOTIFICATIONS});
                } else {
                    reject({errmsg: 'Notifications not found for user ' + authusername});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified notification for authuser.
    * @param {Int} notificationid The id of the notification to retrieve
    * @returns {Notification|Error} On success, the specified notification;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(notificationid) {
        return $q(function(resolve, reject) {
            var authusername = AuthService.getUsername();
            if (!authusername) {
                reject({errmsg: 'User not logged'});
            }
            setTimeout(function() {
                var INBOX = DB_NOTIFICATIONS[authusername];
                if (INBOX) {
                    var NOTIFICATIONS = INBOX.notifications;
                    NOTIFICATIONS.forEach(function(NOTIFICATION) {
                        if (NOTIFICATION.id === notificationid) {
                            resolve({notification: NOTIFICATION});
                            return;
                        }
                    });
                    reject({errmsg: 'Notification ' + notificationid + ' not found for user ' + authusername});
                } else {
                    reject({errmsg: 'Notifications not found for user ' + authusername});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNFrom
    * @description
    * Retrieves the specified notifications for authuser.
    * @param {Int} ntfStart First notification index.
    * @param {Int} ntfN Number of notifications.
    * @returns {[Notification]|Error} On success, the notifications for authuser;
    * an error message, otherwise.
    ***************************************************************************/
    function getNFrom(ntfStart, ntfN) {
        return $q(function(resolve, reject) {
            var authusername = AuthService.getUsername();
            if (!authusername) {
                reject({errmsg: 'User not logged'});
            }
            setTimeout(function() {
                var INBOX = DB_NOTIFICATIONS[authusername];
                if (INBOX) {
                    var news = INBOX.news;
                    var NOTIFICATIONS = INBOX.notifications;
                    var notifications = [];
                    var toread = 0;
                    var end = (ntfN === -1) ? NOTIFICATIONS.length : Math.min(ntfStart + ntfN, NOTIFICATIONS.length);
                    for (var i = ntfStart; i < end; i++) {
                      notifications.push(NOTIFICATIONS[i]);
                      if (!NOTIFICATIONS[i].read) {
                          toread++;
                      }
                    }
                    resolve({notifications: notifications, news: news, toread: toread});
                } else {
                    reject({errmsg: 'Notifications not found for user ' + authusername});
                }
            }, 500);
        });
    }

}

})();
