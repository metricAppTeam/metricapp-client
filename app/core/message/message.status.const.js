(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name MESSAGE_STATE
* @module metricapp
* @description
* Defines constants related to message states.
* - READ:
* - UNREAD:
************************************************************************************/

angular.module('metricapp')

.constant('MESSAGE_STATE', {
    READ:   'READ',
    UNREAD: 'UNREAD'
});

})();
