(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_METRICS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `metrics`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_METRICS', {

    301: {
        id: 301,
        name: 'Metric-301',
        description: LIPSUM,
        grid: 1,
        expert: 'expert-gm',
        metricator: 'metricator-ag',
        status: 'METRIC_APPROVED',
        ts_create: new Date(2016, 1, 20, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 10, 45, 500)
    },

    302: {
        id: 302,
        name: 'Metric-302',
        description: LIPSUM,
        grid: 1,
        expert: 'expert-gm',
        metricator: 'metricator-ag',
        status: 'METRIC_RUNNING',
        ts_create: new Date(2016, 1, 20, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 20, 45, 500)
    },

    303: {
        id: 303,
        name: 'Metric-303',
        description: LIPSUM,
        grid: 1,
        expert: 'expert-gm',
        metricator: 'metricator-af',
        status: 'METRIC_RUNNING',
        ts_create: new Date(2016, 1, 20, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 30, 45, 500)
    },

    304: {
        id: 304,
        name: 'Metric-304',
        description: LIPSUM,
        grid: 1,
        expert: 'expert-gm',
        metricator: 'metricator-ag',
        status: 'METRIC_APPROVED',
        ts_create: new Date(2016, 1, 20, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 40, 45, 500)
    },

    305: {
        id: 305,
        name: 'Metric-305',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        metricator: 'metricator-ag',
        status: 'METRIC_APPROVED',
        ts_create: new Date(2016, 1, 21, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 10, 45, 500)
    },

    306: {
        id: 306,
        name: 'Metric-306',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        metricator: 'metricator-ag',
        status: 'METRIC_RUNNING',
        ts_create: new Date(2016, 1, 21, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 20, 45, 500)
    },

    307: {
        id: 307,
        name: 'Metric-307',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        metricator: 'metricator-af',
        status: 'METRIC_RUNNING',
        ts_create: new Date(2016, 1, 21, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 30, 45, 500)
    },

    308: {
        id: 308,
        name: 'Metric-308',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        metricator: 'metricator-ag',
        status: 'METRIC_APPROVED',
        ts_create: new Date(2016, 1, 21, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 40, 45, 500)
    }

});

})();
