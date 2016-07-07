(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name UserService
* @module metricapp
* @requires $http
* @requires REST_SERVICE
* @requires ROLES
*
* @description
* Realizes a user DAO.
************************************************************************************/

angular.module('metricapp')

.service('UserService', UserService);

UserService.$inject = ['$http', '$q', 'REST_SERVICE', 'ROLES', 'DB_USERS'];

function UserService($http, $q, REST_SERVICE, ROLES, DB_USERS) {

    var service = this;

    service.getUser = getUser;
    service.getUsersInArray = getUsersInArray;
    service.getNUsersFrom = getNUsersFrom;
    service.isOnline = isOnline;

    service.getAll = getAll;

    service.create = create;

    /********************************************************************************
    * @ngdoc method
    * @name getUser
    * @description
    * Retrieves the specified user.
    * @param {Int} username The username of the user.
    * @returns {User|Error} On success, the user; an error message, otherwise.
    ********************************************************************************/
    function getUser(username) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    resolve({user: USER});
                } else {
                    reject({errmsg: 'User ' + username + ' not found'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getUsersInArray
    * @description
    * Retrieves the specified users.
    * @param {[String]} usernames Usernames of users to retrieve.
    * @returns {[User]|Error} On success, the list of users; an error message,
    * otherwise.
    ********************************************************************************/
    function getUsersInArray(usernames) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var users = {};
                usernames.forEach(function(username) {
                    var USER = DB_USERS[username];
                    if (USER) {
                        users[username] = USER;
                    }
                });
                resolve({users: users});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getNUsersFrom
    * @description
    * Retrieves the specified users.
    * @param {Int} usrStart First user index.
    * @param {Int} usrN Number of users.
    * @returns {[User]|Error} On success, the list of users; an error message,
    * otherwise.
    ********************************************************************************/
    function getNUsersFrom(usrStart, usrN) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var users = [];
                var numusers =  Object.keys(DB_USERS).length;
                var end = (usrN == -1) ? numusers : Math.min(usrStart + usrN, numusers);
                for (var i = usrStart; i < end; i++ ) {
                    users.push(DB_USERS[i]);
                }
                resolve({users: users, numusers: numusers});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name isOnline
    * @description
    * Retrieves the status of the specified user.
    * @param {String} username The username whose status is to retrieve.
    * @returns {{online:Boolean}|Error} On success, a boolean status;
    * a JSON representing the error, otherwise.
    ********************************************************************************/
    function isOnline(username) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    resolve({online: USER.online});
                } else {
                    reject({errmsg: 'User ' + username + ' not found'});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all users.
    * @returns {{username:User}} On success, an array of users;
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                resolve({users: DB_USERS});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name create
    * @description
    * Creates a new user.
    * @param {User} user The user to create.
    * @returns {JSON} Insert description here.
    ********************************************************************************/
    function create(user) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                for (var i = 0; i < DB_USERS.length; i++) {
                    if (DB_USERS[i].username === username) {
                        resolve({isonline: DB_USERS[i].online});
                    }
                }
                reject('User not found: ' + username);
            }, 500);
        });
    }

}

})();
