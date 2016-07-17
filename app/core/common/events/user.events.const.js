(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name USER_EVENTS
* @module metricapp
* @description
* Defines events related to users management.
* - CREATE_SUCCESS:
* - CREATE_FAILURE:
* - READ_SUCCESS:
* - READ_FAILURE:
* - UPDATE_SUCCESS:
* - UPDATE_FAILURE:
* - DELETE_SUCCESS:
* - DELETE_FAILURE:
************************************************************************************/

angular.module('metricapp')

.constant('USER_EVENTS', {
    CREATE_SUCCESS: 'user.create.success',
    CREATE_FAILURE: 'user.create.failure',
    READ_SUCCESS:   'user.read.success',
    READ_FAILURE:   'user.read.failure',
    UPDATE_SUCCESS: 'user.update.success',
    UPDATE_FAILURE: 'user.update.failure',
    DELETE_SUCCESS: 'user.delete.success',
    DELETE_FAILURE: 'user.delete.failure'
});

})();
