(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name METRIC_EVENTS
* @module metricapp
* @description
* Defines events related to metrics management.
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

.constant('METRIC_EVENTS', {
    CREATE_SUCCESS: 'metric.create.success',
    CREATE_FAILURE: 'metric.create.failure',
    READ_SUCCESS:   'metric.read.success',
    READ_FAILURE:   'metric.read.failure',
    UPDATE_SUCCESS: 'metric.update.success',
    UPDATE_FAILURE: 'metric.update.failure',
    DELETE_SUCCESS: 'metric.delete.success',
    DELETE_FAILURE: 'metric.delete.failure'
});

})();
