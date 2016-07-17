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
        expert: 'expert-gm',
        questioners: ['questioner-mp', 'questioner-dn'],
        metricators: ['metricator-ag', 'metricator-af'],
        ts_create: new Date(2016, 1, 15, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 21, 10, 40, 45, 500),
        mgoals: [101, 102, 103, 104],
        questions: [201, 202, 203, 204, 205, 206],
        metrics: [301, 302, 303, 304],
        graph: {
            101: [201, 202],
            102: [203, 204],
            103: [205],
            104: [206],
            201: [301],
            202: [301],
            203: [302],
            204: [303],
            205: [304]
        }
    },

    2: {
        id: 2,
        name: 'Grid-2',
        description: LIPSUM,
        expert: 'expert-mp',
        questioners: ['questioner-mp', 'questioner-dn'],
        metricators: ['metricator-ag', 'metricator-af'],
        ts_create: new Date(2016, 1, 16, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 22, 10, 40, 45, 500),
        mgoals: [105, 106, 107, 108],
        questions: [207, 208, 209, 210, 211, 212],
        metrics: [305, 306, 307, 308],
        graph: {
            105: [207, 208],
            106: [209, 210],
            107: [211],
            108: [212],
            207: [305],
            208: [305],
            209: [306],
            210: [307],
            211: [308]
        }
    }

});

})();
