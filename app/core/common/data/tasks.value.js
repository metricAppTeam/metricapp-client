(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_TASKS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `tasks`.
************************************************************************************/

angular.module('metricapp')

.value('DB_TASKS', {
    1: {
        id: 1,
        name: 'Task-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        assignee: 'metricator',
        progress: 30,
        ts_create: new Date(2016, 1, 15, 13, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 13, 30, 45, 500)
    },
    2: {
        id: 2,
        name: 'Task-2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        assignee: 'questioner',
        progress: 30,
        ts_create: new Date(2016, 1, 15, 14, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 14, 30, 45, 500)
    },
    3: {
        id: 3,
        name: 'Task-3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        assignee: 'metricator',
        progress: 60,
        ts_create: new Date(2016, 1, 15, 15, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 15, 30, 45, 500)
    },
    4: {
        id: 4,
        name: 'Task-4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        assignee: 'questioner',
        progress: 60,
        ts_create: new Date(2016, 1, 15, 16, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 16, 30, 45, 500)
    },
    5: {
        id: 5,
        name: 'Task-5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        assignees: 'metricator',
        progress: 100,
        ts_create: new Date(2016, 1, 15, 17, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 17, 30, 45, 500)
    },
    6: {
        id: 6,
        name: 'Task-6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        assignee: 'questioner',
        progress: 100,
        ts_create: new Date(2016, 1, 15, 18, 30, 45, 500),
        ts_update: new Date(2016, 1, 20, 18, 30, 45, 500)
    }

});

})();
