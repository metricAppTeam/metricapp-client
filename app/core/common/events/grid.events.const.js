(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name GRID_EVENTS
* @module metricapp
* @description
* Defines events related to grids management.
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

.constant('GRID_EVENTS', {
    CREATE_SUCCESS: 'grid.create.success',
    CREATE_FAILURE: 'grid.create.failure',
    READ_SUCCESS:   'grid.read.success',
    READ_FAILURE:   'grid.read.failure',
    UPDATE_SUCCESS: 'grid.update.success',
    UPDATE_FAILURE: 'grid.update.failure',
    DELETE_SUCCESS: 'grid.delete.success',
    DELETE_FAILURE: 'grid.delete.failure'
});

})();
