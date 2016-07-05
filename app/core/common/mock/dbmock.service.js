(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name DbMockService
* @module metricapp
* @requires ROLES
* @requires DB_USERS
* @requires DB_CONVERSATIONS
*
* @description
* Provides DB backend simulated data.
************************************************************************************/

angular.module('metricapp')

.service('DbMockService', DbMockService);

DbMockService.$inject = ['ROLES', 'GENDERS', 'DB_USERS', 'DB_CONVERSATIONS'];

function DbMockService(ROLES, GENDERS, DB_USERS, DB_CONVERSATIONS) {
    var service = this;

    service.ROLES = ROLES;
    service.GENDERS = GENDERS;
    service.USERS = DB_USERS;
    service.CONVERSATIONS = DB_CONVERSATIONS;
}

})();
