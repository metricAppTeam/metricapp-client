(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name USER_ANALYTICS
* @module metricapp
* @description
* Defines constants related to users analytics.
* - GQM_SCORE:
* - ACCEPTANCE_RATE:
* - TASKS_PROGRESS:
* - TASKS_RECORD:
* - ARTIFACTS_TOT:
* - ARTIFACTS_MGOAL:
* - ARTIFACTS_RATE:
* - GRIDS_TOT:
* - WORKTIME_RATIO:
************************************************************************************/

angular.module('metricapp')

.constant('USER_ANALYTICS', {
    GQM_SCORE:          'user.analytics.gqm.score',
    ACCEPTANCE_RATE:    'user.analytics.acceptance.rate',
    TASKS_PROGRESS:     'user.analytics.tasks.progress',
    TASKS_RECORD:       'user.analytics.tasks.record',
    ARTIFACTS_TOT:      'user.analytics.artifacts.tot',
    ARTIFACTS_MGOAL:    'user.analytics.artifacts.mgoal',
    ARTIFACTS_RATE:     'user.analytics.artifacts.rate',
    GRIDS_TOT:          'user.analytics.grids.tot',
    WORKTIME_RATIO:     'user.analytics.worktime.ratio'
});

})();
