(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name NOTIFICATION_EVENTS
* @module metricapp
* @description
* Defines events related to notifications management.
* - NO_NEWS:
* - ALL_READ:
* - SET_READ:
************************************************************************************/

angular.module('metricapp')

.constant('NOTIFICATION_EVENTS', {
    NO_NEWS:    'notification.nonews',
    ALL_READ:   'notification.all.read',
    SET_READ:   'notification.set.read',
});

})();
