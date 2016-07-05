(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name METRIC_EVENTS
* @module metricapp
* @description
* Defines events related to metrics.
* - METRIC_EVENT_A:
* - METRIC_EVENT_B:
* - METRIC_EVENT_C:
************************************************************************************/

angular.module('metricapp')

.constant('METRIC_EVENTS', {
    METRIC_EVENT_A: 'metric.event.a',
    METRIC_EVENT_B: 'metric.event.b',
    METRIC_EVENT_C: 'metric.event.c'
});

})();
