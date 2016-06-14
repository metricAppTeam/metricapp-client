(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name DbMockService
* @module metricapp
* @requires ROLES
* @requires DB_USERS
* @requires DB_PROFILES
*
* @description
* Provides DB backend simulated data.
************************************************************************************/

angular.module('metricapp')

.service('DbMockService', DbMockService);

DbMockService.$inject = ['ROLES', 'DB_USERS', 'DB_PROFILES'];

function DbMockService(ROLES, DB_USERS, DB_PROFILES) {
    var service = this;

    service.ROLES = ROLES;
    service.USERS = DB_USERS;
    service.PROFILES = DB_PROFILES;

}

})();