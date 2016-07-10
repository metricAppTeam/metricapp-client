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
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 18, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 10, 45, 500)
    },

    202: {
        id: 202,
        name: 'Question-202',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 18, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 20, 45, 500)
    },

    203: {
        id: 203,
        name: 'Question-203',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 18, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 30, 45, 500)
    },

    204: {
        id: 204,
        name: 'Question-204',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 18, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 40, 45, 500)
    },

    205: {
        id: 205,
        name: 'Question-205',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-dn',
        ts_create: new Date(2016, 1, 18, 10, 50, 45, 500),
        ts_update: new Date(2016, 1, 19, 10, 50, 45, 500)
    },

    206: {
        id: 206,
        name: 'Question-206',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-dn',
        ts_create: new Date(2016, 1, 18, 11, 0,  45, 500),
        ts_update: new Date(2016, 1, 19, 11, 0,  45, 500)
    },

    207: {
        id: 207,
        name: 'Question-207',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 19, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 10, 45, 500)
    },

    208: {
        id: 208,
        name: 'Question-208',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 19, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 20, 45, 500)
    },

    209: {
        id: 209,
        name: 'Question-209',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 19, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 30, 45, 500)
    },

    210: {
        id: 210,
        name: 'Question-210',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        ts_create: new Date(2016, 1, 19, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 40, 45, 500)
    },

    211: {
        id: 211,
        name: 'Question-211',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-dn',
        ts_create: new Date(2016, 1, 19, 10, 50, 45, 500),
        ts_update: new Date(2016, 1, 20, 10, 50, 45, 500)
    },

    212: {
        id: 212,
        name: 'Question-212',
        description: LIPSUM,
        grid: 2,
        expert: 'expert-mp',
        questioner: 'questioner-dn',
        ts_create: new Date(2016, 1, 19, 11, 0,  45, 500),
        ts_update: new Date(2016, 1, 20, 11, 0,  45, 500)
    }

});

})();
