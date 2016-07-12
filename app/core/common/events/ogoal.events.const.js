(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name OGOAL_EVENTS
* @module metricapp
* @description
* Defines events related to organizational goals management.
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

.constant('OGOAL_EVENTS', {
    CREATE_SUCCESS: 'ogoal.create.success',
    CREATE_FAILURE: 'ogoal.create.failure',
    READ_SUCCESS:   'ogoal.read.success',
    READ_FAILURE:   'ogoal.read.failure',
    UPDATE_SUCCESS: 'ogoal.update.success',
    UPDATE_FAILURE: 'ogoal.update.failure',
    DELETE_SUCCESS: 'ogoal.delete.success',
    DELETE_FAILURE: 'ogoal.delete.failure'
});

})();
