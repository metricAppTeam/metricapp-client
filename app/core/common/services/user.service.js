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

    service.getAll = getAll;
    service.getById = getById;
    service.getInArray = getInArray;
    service.getNFrom = getNFrom;

    service.create = create;

    /********************************************************************************
    * @ngdoc method
    * @name getAll
    * @description
    * Retrieves all the users.
    * @returns {[User]|Error} On success, the users;
    * an error message, otherwise.
    ********************************************************************************/
    function getAll() {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var users = [];
                for (user in DB_USERS) {
                    users.push(DB_USERS[user]);
                }
                resolve({users: users});
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getById
    * @description
    * Retrieves the specified user.
    * @param {String} username The username of the user to retrieve.
    * @returns {User|Error} On success, the user;
    * an error message, otherwise.
    ********************************************************************************/
    function getById(username) {
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
    * @name getInArray
    * @description
    * Retrieves the specified users.
    * @param {[String]} usernames Usernames of users to retrieve.
    * @returns {{username:User}|Error} On success, the list of users;
    * an error message, otherwise.
    ********************************************************************************/
    function getInArray(usernames) {
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
    * @name getNFrom
    * @description
    * Retrieves the specified users.
    * @param {Int} usrStart First user index.
    * @param {Int} usrN Number of users.
    * @returns {[User]|Error} On success, the list of users;
    * an error message, otherwise.
    ********************************************************************************/
    function getNFrom(usrStart, usrN) {
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
