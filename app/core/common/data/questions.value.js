(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_QUESTIONS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `questions`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_QUESTIONS', {
    201: {
        id: 201,
        name: 'Question-201',
        description: LIPSUM,
        expert: 'expert',
        questioner: 'questioner',
        progress: 30,
        ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 13, 30, 45, 500)
    },
    202: {
        id: 202,
        name: 'Question-202',
        description: LIPSUM,
        expert: 'expert',
        questioner: 'questioner',
        progress: 30,
        ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 13, 30, 45, 500)
    },
    203: {
        id: 203,
        name: 'Question-203',
        description: LIPSUM,
        expert: 'expert',
        questioner: 'questioner',
        progress: 30,
        ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 13, 30, 45, 500)
    },
    204: {
        id: 204,
        name: 'Question-204',
        description: LIPSUM,
        expert: 'expert',
        questioner: 'questioner',
        progress: 30,
        ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 13, 30, 45, 500)
    },
    205: {
        id: 205,
        name: 'Question-205',
        description: LIPSUM,
        expert: 'expert',
        questioner: 'questioner',
        progress: 30,
        ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 13, 30, 45, 500)
    },
    206: {
        id: 206,
        name: 'Question-206',
        description: LIPSUM,
        expert: 'expert',
        questioner: 'questioner',
        progress: 30,
        ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 13, 30, 45, 500)
    }
});

})();
