(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name NotificationService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
* @requires AuthService
*
* @description
* Provides notifications management services.
************************************************************************************/

angular.module('metricapp')

.service('NotificationService', NotificationService);

NotificationService.$inject = ['$http', '$q', 'REST_SERVICE', 'AuthService', 'DB_NOTIFICATIONS'];

function NotificationService($http, $q, REST_SERVICE, AuthService, DB_NOTIFICATIONS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
    //service.getNFrom = getNFrom;

    service.setReadById = setReadById;
    service.setAllRead = setAllRead;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the notifications for authuser;
    * @returns {[Notification]|Error} On success, the notifications;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var INBOX = DB_NOTIFICATIONS[authusername];
                    if (INBOX) {
                        var NOTIFICATIONS = INBOX.notifications;
                        var NEWS = INBOX.news;
                        var toread = 0;
                        NOTIFICATIONS.forEach(function(NOTIFICATION) {
                            if (!NOTIFICATION.read) {
                                toread++;
                            }
                        });
                        resolve({notifications: NOTIFICATIONS, news: NEWS, toread: toread});
                    } else {
                        reject({errmsg: 'Notifications not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
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
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var INBOX = DB_NOTIFICATIONS[authusername];
                    if (INBOX) {
                        var NOTIFICATIONS = INBOX.notifications;
                        var NEWS = INBOX.news;
                        NOTIFICATIONS.forEach(function(NOTIFICATION) {
                            if (NOTIFICATION.id === notificationid) {
                                resolve({notification: NOTIFICATION, new: NEWS});
                                return;
                            }
                        });
                        reject({errmsg: 'Notification ' + notificationid + ' not found for user ' + authusername});
                    } else {
                        reject({errmsg: 'Notifications not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
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
    /*
    function getNFrom(ntfStart, ntfN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
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
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }
    */

    /********************************************************************************
    * @ngdoc method
    * @name setReadById
    * @description
    * Set as read the specified notification.
    * @param {Int} notificationid The id of the notification to set read.
    * @returns {Boolean|Error} On success, a message;
    * an error message, otherwise.
    ********************************************************************************/
    function setReadById(notificationid) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var INBOX = DB_NOTIFICATIONS[authusername];
                    if (INBOX) {
                        var NOTIFICATIONS = INBOX.notifications;
                        var i = NOTIFICATIONS.indexOf(function(NOTIFICATION) {
                            return NOTIFICATION.id === notificationid;
                        });
                        if (i >= 0) {
                            NOTIFICATIONS[i].read = true;
                            resolve({msg: 'Notification ' + notificationid + ' marked as read'});
                        } else {
                            reject({errmsg: 'Notification ' + notificationid + ' not found for user ' + authusername});
                        }
                    } else {
                        reject({errmsg: 'Notifications not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name setAllRead
    * @description
    * Set as read all the notifications for authuser.
    * @returns {Boolean|Error} On success, a message;
    * an error message, otherwise.
    ********************************************************************************/
    function setAllRead() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var INBOX = DB_NOTIFICATIONS[authusername];
                    if (INBOX) {
                        var NOTIFICATIONS = INBOX.notifications;
                        NOTIFICATIONS.forEach(function(NOTIFICATION) {
                            NOTIFICATION.read = true;
                        });
                        resolve({msg: 'All notifications marked as read'});
                    } else {
                        reject({errmsg: 'Notifications not found for user ' + authusername});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

}

})();
