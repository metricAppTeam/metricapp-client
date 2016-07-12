(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name USER_ANALYTICS
* @module metricapp
* @description
* Defines constants related to user analytics.
* - TASKS_PROGRESS:
* - ACCEPTANCE_RATE:
* - TASKS_RATE:
************************************************************************************/

angular.module('metricapp')

.constant('USER_ANALYTICS', {
    TASKS_PROGRESS:     'user.analytics.tasks.progress',
    ACCEPTANCE_RATE:    'user.analytics.acceptance.rate',
    TASKS_RATE:         'user.analytics.tasks.rate'
});

})();
