(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_EVENTS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `notifications`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_NOTIFICATIONS', {

    'expert-gm': {
        news: 4,
        notifications: [
            {
                id: 1,
                scope: 'grids',
                artifact_id: 1,
                name: 'Created new organizational goal',
                author:  'expert-gc',
                ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
                read: false
            },
            {
                id: 2,
                scope: 'mgoals',
                artifact_id: 101,
                name: 'Created new measurement goal',
                author:  'expert-gc',
                ts_create: new Date(2016, 1, 15, 14, 30, 45, 500),
                read: false
            },
            {
                id: 3,
                scope: 'questions',
                artifact_id: 201,
                name: 'Created new question',
                author:  'questioner-mp',
                ts_create: new Date(2016, 1, 15, 15, 30, 45, 500),
                read: false
            },
            {
                id: 4,
                scope: 'metrics',
                artifact_id: 301,
                name: 'Created new metric',
                author:  'metricator-ag',
                ts_create: new Date(2016, 1, 15, 16, 30, 45, 500),
                read: false
            }
        ]
    },

    'expert-mp': {
        news: 0,
        notifications: []
    },

    'expert-gc': {
        news: 0,
        notifications: []
    },

    'expert-mm': {
        news: 0,
        notifications: []
    },

    'metricator-ag': {
        news: 0,
        notifications: []
    },

    'metricator-af': {
        news: 0,
        notifications: []
    },

    'questioner-mp': {
        news: 0,
        notifications: []
    },

    'questioner-dn': {
        news: 0,
        notifications: []
    },

});

})();
