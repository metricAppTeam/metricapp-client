(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_TEAMS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `teams`.
************************************************************************************/

angular.module('metricapp')

.value('DB_TEAMS', {

    1: {
        id: 1,
        name: 'Team-Grid-1',
        expert: 'expert-gm',
        questioners: ['questioner-mp', 'questioner-dn'],
        metricators: ['metricator-ag', 'metricator-af'],
        ts_create: new Date(2016, 1, 15, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 15, 10, 10, 45, 500),
    },

    2: {
        id: 2,
        name: 'Team-Grid-2',
        expert: 'expert-mp',
        questioners: ['questioner-mp', 'questioner-dn'],
        metricators: ['metricator-ag', 'metricator-af'],
        ts_create: new Date(2016, 1, 16, 10, 10, 45, 500),
        ts_update: new Date(2016, 1, 16, 10, 10, 45, 500),
    }

});

})();
