(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_EVENTS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `notifications`.
************************************************************************************/

angular.module('metricapp')

.value('DB_NOTIFICATIONS', {

    'expert': {
        news: 3,
        notifications: [
            {
                id: 1,
                scope: 'Scope-1',
                name: 'Event-1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 01, 15, 13, 30, 45, 500),
                read: true
            },
            {
                id: 2,
                scope: 'Scope-2',
                name: 'Event-2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 01, 15, 14, 30, 45, 500),
                read: true
            },
            {
                id: 3,
                scope: 'Scope-1',
                name: 'Event-3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 01, 15, 15, 30, 45, 500),
                read: true
            },
            {
                id: 4,
                scope: 'Scope-2',
                name: 'Event-4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 01, 15, 16, 30, 45, 500),
                read: false
            },
            {
                id: 5,
                scope: 'Scope-1',
                name: 'Event-5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 01, 15, 17, 30, 45, 500),
                read: false
            },
            {
                id: 6,
                scope: 'Scope-2',
                name: 'Event-6',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 01, 15, 18, 30, 45, 500),
                read: false
            }
        ]
    },

    'metricator': {
        news: 3,
        notifications: [
            {
                id: 1,
                scope: 'Scope-1',
                name: 'Event-1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 01, 15, 13, 30, 45, 500),
                read: true
            },
            {
                id: 2,
                scope: 'Scope-2',
                name: 'Event-2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 01, 15, 14, 30, 45, 500),
                read: true
            },
            {
                id: 3,
                scope: 'Scope-1',
                name: 'Event-3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 01, 15, 15, 30, 45, 500),
                read: true
            },
            {
                id: 4,
                scope: 'Scope-2',
                name: 'Event-4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 01, 15, 16, 30, 45, 500),
                read: false
            },
            {
                id: 5,
                scope: 'Scope-1',
                name: 'Event-5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 01, 15, 17, 30, 45, 500),
                read: false
            },
            {
                id: 6,
                scope: 'Scope-2',
                name: 'Event-6',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 01, 15, 18, 30, 45, 500),
                read: false
            }
        ]
    },

    'questioner': {
        news: 3,
        notifications: [
            {
                id: 1,
                scope: 'Scope-1',
                name: 'Event-1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 01, 15, 13, 30, 45, 500),
                read: true
            },
            {
                id: 2,
                scope: 'Scope-2',
                name: 'Event-2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 01, 15, 14, 30, 45, 500),
                read: true
            },
            {
                id: 3,
                scope: 'Scope-1',
                name: 'Event-3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 01, 15, 15, 30, 45, 500),
                read: true
            },
            {
                id: 4,
                scope: 'Scope-2',
                name: 'Event-4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 01, 15, 16, 30, 45, 500),
                read: false
            },
            {
                id: 5,
                scope: 'Scope-1',
                name: 'Event-5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'metricator',
                href: '#',
                ts_create: new Date(2016, 01, 15, 17, 30, 45, 500),
                read: false
            },
            {
                id: 6,
                scope: 'Scope-2',
                name: 'Event-6',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                author:  'questioner',
                href: '#',
                ts_create: new Date(2016, 01, 15, 18, 30, 45, 500),
                read: false
            }
        ]
    }

]);

})();
