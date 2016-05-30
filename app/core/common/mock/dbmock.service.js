(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name DbMockService
* @module metricapp
*
* @description
* Provides DB backend simulated data.
************************************************************************************/

angular.module('metricapp')

.service('DbMockService', DbMockService);

function DbMockService() {

    var ROLES = {
        ALL:        '*',
        NONE:       'NONE',
        EXPERT:     'EXPERT',
        QUESTIONER: 'QUESTIONER',
        METRICATOR: 'METRICATOR'
    };

    var service = this;

    service.users = users;
    service.profiles = profiles;

    /********************************************************************************
    * USERS DATA
    ********************************************************************************/

    var users = [
        {
            username: 'expert',
            password: 'password',
            role: ROLES.EXPERT
        },
        {
            username: 'questioner',
            password: 'password',
            role: ROLES.QUESTIONER
        },
        {
            username: 'metricator',
            password: 'password',
            role: ROLES.METRICATOR
        },
        {
            username: 'none',
            password: 'password',
            role: ROLES.NONE
        }
    ];

    var profiles = [
        {
            username: 'expert',
            firstname: 'Giacomo',
            lastname: 'Marciani',
            email: 'email@domain.com'
        },
        {
            username: 'questioner',
            firstname: 'Marco',
            lastname: 'Piu',
            email: 'email@domain.com'
        },
        {
            username: 'metricator',
            firstname: 'Andrea',
            lastname: 'Gennusa',
            email: 'email@domain.com'
        },
        {
            username: 'default',
            firstname: 'Mario',
            lastname: 'Rossi',
            email: 'email@domain.com'
        }
    ];
}

})();
