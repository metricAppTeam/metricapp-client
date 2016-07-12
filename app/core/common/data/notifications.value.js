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
        news: 3,
        notifications: [
            {
                id: 1,
                scope: 'Scope-1', // ogoal, grid, mgoal, question, metrics,
                objectId: '1', // id a cui puntare per creare href
                name: 'Event-1',
                description: LIPSUM,
                author:  'metricator',
                ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
                read: true
            },
            {
                id: 2,
                scope: 'Scope-2',
                name: 'Event-2',
                description: LIPSUM,
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 1, 15, 14, 30, 45, 500),
                read: true
            },
            {
                id: 3,
                scope: 'Scope-1',
                name: 'Event-3',
                description: LIPSUM,
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 1, 15, 15, 30, 45, 500),
                read: true
            },
            {
                id: 4,
                scope: 'Scope-2',
                name: 'Event-4',
                description: LIPSUM,
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 1, 15, 16, 30, 45, 500),
                read: false
            },
            {
                id: 5,
                scope: 'Scope-1',
                name: 'Event-5',
                description: LIPSUM,
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 1, 15, 17, 30, 45, 500),
                read: false
            },
            {
                id: 6,
                scope: 'Scope-2',
                name: 'Event-6',
                description: LIPSUM,
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 1, 15, 18, 30, 45, 500),
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
