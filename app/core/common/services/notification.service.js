(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name NotificationService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
* @requires UserService
* @requires REST_SERVICE
*
* @description
* Provides authentication services.
************************************************************************************/

angular.module('metricapp')

.service('NotificationService', NotificationService);

NotificationService.$inject = ['$http', '$rootScope', '$cookies', 'UserService', 'REST_SERVICE'];

function NotificationService($http, $rootScope, $cookies, UserService, REST_SERVICE) {

    var service = this;

    service.getNotification = getNotification;
    service.getNotifications = getNotifications;   

    /********************************************************************************
    * @ngdoc method
    * @name getNotification
    * @description
    * Retrieves the specified notification for the authuser.
    * @param {Int} notificationid The nontification id.
    * @returns {RichNotification|Error} On success, the notification with meta;
    * an error, otherwise.
    ********************************************************************************/
    function getNotification(notificationid) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name getNotifications
    * @description
    * Retrieves the specified notifications for authuser.
    * @param {Int} ntfStart First notification index.
    * @param {Int} ntfN Number of notifications.
    * @returns {[RichNotification]|Error} On success, the list of notifications with
     * meta for authuser; an error, otherwise.
    ***************************************************************************/
    function getNotifications(ntfStart, ntfN) {

    }

}

})();
