(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_MGOALS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `mgoals`.
************************************************************************************/

angular.module('metricapp')

.value('DB_MGOALS', {
    101: {
        id: 101,
        name: 'MGoal-101',
        description: LIPSUM,
        progress: 30,
        ts_create: new Date(2016, 01, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 13, 30, 45, 500)
    },
    102: {
        id: 102,
        name: 'MGoal-102',
        description: LIPSUM,
        progress: 30,
        ts_create: new Date(2016, 01, 15, 14, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 14, 30, 45, 500)
    },
    103: {
        id: 103,
        name: 'MGoal-103',
        description: LIPSUM,
        progress: 60,
        ts_create: new Date(2016, 01, 15, 15, 30, 45, 500),
        ts_update: new Date(2016, 01, 20, 15, 30, 45, 500)
    }
});

})();
