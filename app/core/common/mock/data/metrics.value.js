(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_METRICS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `metrics`.
************************************************************************************/

angular.module('metricapp')

.value('DB_METRICS', {
    301: {
        id: 301,
        name: 'Metric-301',
        description: LIPSUM,
        progress: 30,
        ts_create: new Date(2016, 01, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 13, 30, 45, 500)
    },
    302: {
        id: 302,
        name: 'Metric-302',
        description: LIPSUM,
        progress: 30,
        ts_create: new Date(2016, 01, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 13, 30, 45, 500)
    },
    303: {
        id: 302,
        name: 'Metric-303',
        description: LIPSUM,
        progress: 30,
        ts_create: new Date(2016, 01, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 13, 30, 45, 500)
    }
});

})();
