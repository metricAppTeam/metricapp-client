(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_MGOALS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `mgoals`.
************************************************************************************/

var LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

angular.module('metricapp')

.value('DB_MGOALS', {

    101: {
        id: 101,
        name: 'MGoal-101',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        metricator: 'metricator-ag',
        status: 'MGOAL_APPROVED',
        progress: 100,
        ts_create: new Date(2016, 1, 16, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 10, 45, 500)
    },

    102: {
        id: 102,
        name: 'MGoal-102',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-mp',
        metricator: 'metricator-af',
        status: 'MGOAL_RUNNING',
        progress: 75,
        ts_create: new Date(2016, 1, 16, 10, 20, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 20, 45, 500)
    },

    103: {
        id: 103,
        name: 'MGoal-103',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-dn',
        metricator: 'metricator-ag',
        status: 'MGOAL_RUNNING',
        progress: 50,
        ts_create: new Date(2016, 1, 16, 10, 30, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 30, 45, 500)
    },

    104: {
        id: 104,
        name: 'MGoal-104',
        description: LIPSUM,
        expert: 'expert-gm',
        questioner: 'questioner-dn',
        metricator: 'metricator-af',
        status: 'MGOAL_RUNNING',
        progress: 25,
        ts_create: new Date(2016, 1, 16, 10, 40, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 40, 45, 500)
    },

    105: {
        id: 105,
        name: 'MGoal-105',
        description: LIPSUM,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        metricator: 'metricator-ag',
        status: 'MGOAL_APPROVED',
        progress: 100,
        ts_create: new Date(2016, 1, 16, 10, 50, 45, 500),
        ts_update: new Date(2016, 1, 17, 10, 50, 45, 500)
    },

    106: {
        id: 106,
        name: 'MGoal-106',
        description: LIPSUM,
        expert: 'expert-mp',
        questioner: 'questioner-mp',
        metricator: 'metricator-af',
        status: 'MGOAL_RUNNING',
        progress: 75,
        ts_create: new Date(2016, 1, 16, 11, 0,  45, 500),
        ts_update: new Date(2016, 1, 17, 11, 0,  45, 500)
    },

    107: {
        id: 107,
        name: 'MGoal-107',
        description: LIPSUM,
        expert: 'expert-mp',
        questioner: 'questioner-dn',
        metricator: 'metricator-ag',
        status: 'MGOAL_RUNNING',
        progress: 50,
        ts_create: new Date(2016, 1, 16, 11, 10, 45, 500),
        ts_update: new Date(2016, 1, 17, 11, 10, 45, 500)
    },

    108: {
        id: 108,
        name: 'MGoal-108',
        description: LIPSUM,
        expert: 'expert-mp',
        questioner: 'questioner-dn',
        metricator: 'metricator-af',
        status: 'MGOAL_RUNNING',
        progress: 25,
        ts_create: new Date(2016, 1, 16, 11, 20, 45, 500),
        ts_update: new Date(2016, 1, 17, 11, 20, 45, 500)
    }

});

})();
