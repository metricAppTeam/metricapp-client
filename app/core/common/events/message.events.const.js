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
* - MESSAGE_RECEIVED:
* - CONVERSATION_CREATED:
* - CONVERSATION_REMOVED:
************************************************************************************/

angular.module('metricapp')

.constant('MESSAGE_EVENTS', {
    NO_NEWS:                'message.nonews',
    ALL_READ:               'message.all.read',
    SET_READ:               'message.set.read',
    MESSAGE_SENT:           'message.message.sent',
    MESSAGE_RECEIVED:       'message.message.received',
    CONVERSATION_CREATED:   'message.conversation.created',
    CONVERSATION_REMOVED:   'message.conversation.removed'
});

})();
