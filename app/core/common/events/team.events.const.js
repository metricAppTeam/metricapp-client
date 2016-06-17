(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name GOAL_EVENTS
* @module metricapp
* @description
* Defines events related to measurement goals.
* - GOAL_EVENT_A:
* - GOAL_EVENT_B:
* - GOAL_EVENT_C:
************************************************************************************/

angular.module('metricapp')

.constant('GOAL_EVENTS', {
    GOAL_EVENT_A: 'goal.event.a',
    GOAL_EVENT_B: 'goal.event.b',
    GOAL_EVENT_C: 'goal.event.c'
});

})();
