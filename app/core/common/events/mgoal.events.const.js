(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name MGOAL_EVENTS
* @module metricapp
* @description
* Defines events related to measurement goals management.
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

.constant('MGOAL_EVENTS', {
    CREATE_SUCCESS: 'mgoal.create.success',
    CREATE_FAILURE: 'mgoal.create.failure',
    READ_SUCCESS:   'mgoal.read.success',
    READ_FAILURE:   'mgoal.read.failure',
    UPDATE_SUCCESS: 'mgoal.update.success',
    UPDATE_FAILURE: 'mgoal.update.failure',
    DELETE_SUCCESS: 'mgoal.delete.success',
    DELETE_FAILURE: 'mgoal.delete.failure'
});

})();
