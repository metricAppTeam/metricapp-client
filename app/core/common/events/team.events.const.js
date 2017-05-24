(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name TEAM_EVENTS
* @module metricapp
* @description
* Defines events related to teams management.
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

.constant('TEAM_EVENTS', {
    CREATE_SUCCESS: 'team.create.success',
    CREATE_FAILURE: 'team.create.failure',
    READ_SUCCESS:   'team.read.success',
    READ_FAILURE:   'team.read.failure',
    UPDATE_SUCCESS: 'team.update.success',
    UPDATE_FAILURE: 'team.update.failure',
    DELETE_SUCCESS: 'team.delete.success',
    DELETE_FAILURE: 'team.delete.failure'
});

})();
