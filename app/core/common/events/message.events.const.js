(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name MESSAGE_EVENTS
* @module metricapp
* @description
* Defines events related to messages management.
* - ALL_READ:
* - SET_READ:
************************************************************************************/

angular.module('metricapp')

.constant('MESSAGE_EVENTS', {
    ALL_READ:              'notification.all.read',
    SET_READ:              'notification.set.read',
});

})();
