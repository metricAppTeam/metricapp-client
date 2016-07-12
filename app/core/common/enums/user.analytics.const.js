(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name USER_ANALYTICS
* @module metricapp
* @description
* Defines constants related to users analytics.
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

.constant('USER_ANALYTICS', {
    GQM_SCORE:          'user.analytics.gqm.score',
    GRIDS_TOT:          'user.analytics.grids.tot',
    ARTIFACTS_TOT:      'user.analytics.artifacts.tot',
    ACCEPTANCE_RATIO:   'user.analytics.acceptance.ratio',
    ARTIFACTS_MGOAL:    'user.analytics.artifacts.mgoal',
    ARTIFACTS_RATE:     'user.analytics.artifacts.rate',
    WORKTIME_RATIO:     'user.analytics.worktime.ratio',
    TASKS_PROGRESS:     'user.analytics.tasks.progress',
    TASKS_RECORD:       'user.analytics.tasks.record'
});

})();
