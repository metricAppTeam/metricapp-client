(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_GRIDS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `grids`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_GRIDS', {
    1: {
        id: 1,
        name: 'Grid-1',
        description: LIPSUM,
        owner: 'expert',
        ts_create: new Date(2016, 01, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 13, 30, 45, 500),
        mgoals: [101, 102, 103],
        questions: [201, 202, 203, 204, 205, 206, 207, 208, 209],
        metrics: [301, 302, 303],
        graph: {
            101: [201, 202, 203],
            102: [204, 205, 206],
            103: [207, 208, 209],
            201: [301],
            202: [302],
            203: [303],
            204: [301],
            205: [302],
            206: [303],
            207: [301],
            208: [302],
            209: [303]
        }
    },
    2: {
        id: 2,
        name: 'Grid-2',
        description: LIPSUM,
        owner: 'expert',
        ts_create: new Date(2016, 01, 15, 14, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 14, 30, 45, 500),
        mgoals: [101, 102, 103],
        questions: [201, 202, 203, 204, 205, 206, 207, 208, 209],
        metrics: [301, 302, 303],
        graph: {
            101: [201, 202, 203],
            102: [204, 205, 206],
            103: [207, 208, 209],
            201: [301],
            202: [302],
            203: [303],
            204: [301],
            205: [302],
            206: [303],
            207: [301],
            208: [302],
            209: [303]
        }
    },
    3: {
        id: 3,
        name: 'Grid-3',
        description: LIPSUM,
        expert: 'expert',
        questioners: ['questioner'],
        metricators: ['metricator'],
        ts_create: new Date(2016, 01, 15, 15, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 15, 30, 45, 500),
        mgoals: [101, 102, 103],
        questions: [201, 202, 203, 204, 205, 206, 207, 208, 209],
        metrics: [301, 302, 303],
        graph: {
            101: [201, 202, 203],
            102: [204, 205, 206],
            103: [207, 208, 209],
            201: [301],
            202: [302],
            203: [303],
            204: [301],
            205: [302],
            206: [303],
            207: [301],
            208: [302],
            209: [303]
        }
    },
    4: {
        id: 4,
        name: 'Grid-4',
        description: LIPSUM,
        expert: 'expert',
        questioners: ['questioner'],
        metricators: ['metricator'],
        ts_create: new Date(2016, 01, 15, 16, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 16, 30, 45, 500),
        mgoals: [101, 102, 103],
        questions: [201, 202, 203, 204, 205, 206, 207, 208, 209],
        metrics: [301, 302, 303],
        graph: {
            101: [201, 202, 203],
            102: [204, 205, 206],
            103: [207, 208, 209],
            201: [301],
            202: [302],
            203: [303],
            204: [301],
            205: [302],
            206: [303],
            207: [301],
            208: [302],
            209: [303]
        }
    },
    5: {
        id: 5,
        name: 'Grid-5',
        description: LIPSUM,
        expert: 'expert',
        questioners: ['questioner'],
        metricators: ['metricator'],
        ts_create: new Date(2016, 01, 15, 17, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 17, 30, 45, 500),
        mgoals: [101, 102, 103],
        questions: [201, 202, 203, 204, 205, 206, 207, 208, 209],
        metrics: [301, 302, 303],
        graph: {
            101: [201, 202, 203],
            102: [204, 205, 206],
            103: [207, 208, 209],
            201: [301],
            202: [302],
            203: [303],
            204: [301],
            205: [302],
            206: [303],
            207: [301],
            208: [302],
            209: [303]
        }
    },
    6: {
        id: 6,
        name: 'Grid-6',
        description: LIPSUM,
        expert: 'expert',
        questioners: ['questioner'],
        metricators: ['metricator'],
        ts_create: new Date(2016, 01, 15, 18, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 18, 30, 45, 500),
        mgoals: [101, 102, 103],
        questions: [201, 202, 203, 204, 205, 206, 207, 208, 209],
        metrics: [301, 302, 303],
        graph: {
            101: [201, 202, 203],
            102: [204, 205, 206],
            103: [207, 208, 209],
            201: [301],
            202: [302],
            203: [303],
            204: [301],
            205: [302],
            206: [303],
            207: [301],
            208: [302],
            209: [303]
        }
    }

});

})();
