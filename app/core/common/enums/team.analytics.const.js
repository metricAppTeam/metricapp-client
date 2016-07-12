(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name TEAM_ANALYTICS
* @module metricapp
* @description
* Defines constants related to team analytics.
* - TASKS_PROGRESS:
* - ACCEPTANCE_RATE:
* - TASKS_RATE:
************************************************************************************/

angular.module('metricapp')

.constant('TEAM_ANALYTICS', {
    TASKS_PROGRESS:     'team.analytics.tasks.progress',
    ACCEPTANCE_RATE:    'team.analytics.acceptance.rate',
    TASKS_RATE:         'team.analytics.tasks.rate'
});

})();
