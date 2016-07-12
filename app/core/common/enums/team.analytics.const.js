(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name TEAM_ANALYTICS
* @module metricapp
* @description
* Defines constants related to teams analytics.
* - GQM_SCORE:
* - GRIDS_TOT:
* - ARTIFACTS_TOT:
* - ACCEPTANCE_RATIO:
* - ARTIFACTS_MGOAL:
* - ARTIFACTS_RATE:
* - WORKTIME_RATIO:
* - TASKS_PROGRESS:
* - TASKS_RECORD:
************************************************************************************/

angular.module('metricapp')

.constant('TEAM_ANALYTICS', {
    GQM_SCORE:          'team.analytics.gqm.score',
    GRIDS_TOT:          'team.analytics.grids.tot',
    ARTIFACTS_TOT:      'team.analytics.artifacts.tot',
    ACCEPTANCE_RATIO:   'team.analytics.acceptance.ratio',
    ARTIFACTS_MGOAL:    'team.analytics.artifacts.mgoal',
    ARTIFACTS_RATE:     'team.analytics.artifacts.rate',
    WORKTIME_RATIO:     'team.analytics.worktime.ratio',
    TASKS_PROGRESS:     'team.analytics.tasks.progress',
    TASKS_RECORD:       'team.analytics.tasks.record'
});

})();
