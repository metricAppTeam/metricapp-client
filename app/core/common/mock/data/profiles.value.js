(function() { 'use strict';

/************************************************************************************
* @ngdoc value
* @name DB_PROFILES
* @module metricapp
*
* @description
* Provides the simulation of the DB document `profiles`.
************************************************************************************/

angular.module('metricapp')

.value('DB_PROFILES', [
    {
        username: 'expert',
        firstname: 'Giacomo',
        lastname: 'Marciani',
        email: 'giacomo.marciani@domain.com'
    },
    {
        username: 'questioner',
        firstname: 'Marco',
        lastname: 'Piu',
        email: 'marco.piu@domain.com'
    },
    {
        username: 'metricator',
        firstname: 'Andrea',
        lastname: 'Gennusa',
        email: 'andrea.gennusa@domain.com'
    },
    {
        username: 'default',
        firstname: 'Mario',
        lastname: 'Rossi',
        email: 'mario.rossi@domain.com'
    }
]);

})();
