(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name GRID_ANALYTICS
* @module metricapp
* @description
* Defines constants related to grid analytics.
* - GQM_SCORE:
* - ACCEPTANCE_RATE:
* - TASKS_PROGRESS:
* - TASKS_RECORD:
* - ARTIFACTS_TOT:
* - ARTIFACTS_MGOAL:
* - ARTIFACTS_RATE:
* - WORKTIME_RATIO:
************************************************************************************/

angular.module('metricapp')

.constant('TEAM_ANALYTICS', {
    GQM_SCORE:          'team.analytics.gqm.score',
    ACCEPTANCE_RATE:    'team.analytics.acceptance.rate',
    TASKS_PROGRESS:     'team.analytics.tasks.progress',
    TASKS_RECORD:       'team.analytics.tasks.record',
    ARTIFACTS_TOT:      'team.analytics.artifacts.tot',
    ARTIFACTS_MGOAL:    'team.analytics.artifacts.mgoal',
    ARTIFACTS_RATE:     'team.analytics.artifacts.rate',
    GRIDS_TOT:          'team.analytics.grids.tot',
    WORKTIME_RATIO:     'team.analytics.worktime.ratio'
});

})();
