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
        role: 'EXPERT',
        firstname:  'Giacomo',
        lastname:   'Marciani',
        gender:     'MALE',
        birthday:   '27/06/1990',
        email:      'giacomo.marciani@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/profile-picture.png',
        online: false
    },
    {
        username: 'questioner',
        password: 'password',
        role: 'QUESTIONER',
        firstname: 'Marco',
        lastname: 'Piu',
        gender:     'MALE',
        birthday:   '27/06/1990',
        email:      'marco.piu@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/profile-picture.png',
        online: false
    },
    {
        username: 'metricator',
        password: 'password',
        role: 'METRICATOR',
        firstname: 'Andrea',
        lastname: 'Gennusa',
        gender:     'MALE',
        birthday:   '27/06/1990',
        email:      'andrea.gennusa@domain.com',
        mobile:     '+39 12345678',
        picture:    'uploads/profile-picture.png',
        online: false
    }
]);

})();
