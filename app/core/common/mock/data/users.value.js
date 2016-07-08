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

.value('DB_USERS', {

    'expert': {
        username: 'expert',
        password: 'password',
        role: 'EXPERT',
        firstname:  'Giacomo',
        lastname:   'Marciani',
        gender:     'MALE',
        birthday:   new Date(1990,06, 27),
        email:      'giacomo.marciani@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/user-picture-1.svg',
        online: false
    },

    'metricator': {
        username: 'metricator',
        password: 'password',
        role: 'METRICATOR',
        firstname: 'Andrea',
        lastname: 'Gennusa',
        gender:     'MALE',
        birthday:   new Date(1990,06, 27),
        email:      'andrea.gennusa@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/user-picture-2.svg',
        online: false
    },

    'questioner': {
        username: 'questioner',
        password: 'password',
        role: 'QUESTIONER',
        firstname: 'Marco',
        lastname: 'Piu',
        gender:     'MALE',
        birthday:   new Date(1990,06, 27),
        email:      'marco.piu@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/user-picture-3.svg',
        online: false
    }

]);

})();
