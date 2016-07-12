(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name GRID_ANALYTICS
* @module metricapp
* @description
* Defines constants related to grids analytics.
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

.constant('GRID_ANALYTICS', {
    GQM_SCORE:          'grid.analytics.gqm.score',
    ACCEPTANCE_RATE:    'grid.analytics.acceptance.rate',
    TASKS_PROGRESS:     'grid.analytics.tasks.progress',
    TASKS_RECORD:       'grid.analytics.tasks.record',
    ARTIFACTS_TOT:      'grid.analytics.artifacts.tot',
    ARTIFACTS_MGOAL:    'grid.analytics.artifacts.mgoal',
    ARTIFACTS_RATE:     'grid.analytics.artifacts.rate',
    GRIDS_TOT:          'grid.analytics.grids.tot',
    WORKTIME_RATIO:     'grid.analytics.worktime.ratio'
});

})();
