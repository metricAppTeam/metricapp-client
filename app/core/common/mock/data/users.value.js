(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_USERS
* @module metricapp
*
* @description
* Provides the simulation of the DB document `users`.
************************************************************************************/

angular.module('metricapp')

.value('DB_USERS', [
    {
        username: 'expert',
        password: 'password',
        role: 'EXPERT'
    },
    {
        username: 'questioner',
        password: 'password',
        role: 'QUESTIONER'
    },
    {
        username: 'metricator',
        password: 'password',
        role: 'METRICATOR'
    }
]);

})();
