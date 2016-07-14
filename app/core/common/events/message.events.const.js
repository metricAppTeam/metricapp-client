(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name MESSAGE_EVENTS
* @module metricapp
* @description
* Defines events related to messages management.
* - ALL_READ:
* - SET_READ:
* - MESSAGE_SENT:
************************************************************************************/

angular.module('metricapp')

.constant('MESSAGE_EVENTS', {
    ALL_READ:     'message.all.read',
    SET_READ:     'message.set.read',
    MESSAGE_SENT: 'message.message.sent'
});

})();
