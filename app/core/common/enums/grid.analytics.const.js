(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name GRID_ANALYTICS
* @module metricapp
* @description
* Defines constants related to grid analytics.
* - TASKS_PROGRESS:
* - ACCEPTANCE_RATE:
* - TASKS_RATE:
************************************************************************************/

angular.module('metricapp')

.constant('TEAM_ANALYTICS', {
    TASKS_PROGRESS:     'grid.analytics.tasks.progress',
    ACCEPTANCE_RATE:    'grid.analytics.acceptance.rate',
    TASKS_RATE:         'grid.analytics.tasks.rate'
});

})();
