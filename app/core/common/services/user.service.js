(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name UserService
* @module metricapp
* @requires $http
* @requires $cookies
* @requires REST_SERVICE
* @requires AuthService
* @requires ROLES
*
* @description
* Provides users management services.
************************************************************************************/

angular.module('metricapp')

.service('UserService', UserService);

UserService.$inject = ['$http', '$q', '$cookies', 'REST_SERVICE', 'AuthService', 'ROLES', 'DB_USERS'];

function UserService($http, $q, $cookies, REST_SERVICE, AuthService, ROLES, DB_USERS) {

    var service = this;

    service.getAll = getAll;
    service.getById = getById;
    service.getInArray = getInArray;
    service.getNFrom = getNFrom;

    service.create = create;
    service.update = update;

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
                for (var user in DB_USERS) {
                    users.push(DB_USERS[user]);
                }
                alert('UserService.getAll->DB_USERS : ' + angular.toJson(DB_USERS));
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
        alert('UserService.getById:username='+username);
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    resolve({user: USER});
                } else {
                    reject({errmsg: 'User ' + angular.toJson(username) + ' not found'});
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
        alert('UserService.getInArray:usernames='+angular.toJson(usernames));
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
                var end = (usrN === -1) ? numusers : Math.min(usrStart + usrN, numusers);
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
    * @returns {JSON|Error} On success, the username of the successfully created user
    * and a success message;
    * an error message, otherwise.
    ********************************************************************************/
    function create(user) {
        return $q(function(resolve, reject) {
            var username = user.username;
            setTimeout(function() {
                if (DB_USERS[username]) {
                    reject({errmsg: 'User ' + username + ' already registered'});
                } else {
                    DB_USERS[username] = angular.copy(user);
                    DB_USERS[username].online = false;
                    resolve({username: username, msg: 'Thank you for signing up ' + username});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name update
    * @description
    * Updates the authuser profile.
    * @param {UserAttrs} userAttrs The user attributes to update.
    * @returns {String|Error} On success, the username of the updated user;
    * an error message, otherwise.
    ********************************************************************************/
    function update(userAttrs) {
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var authusername = AuthService.getUsername();
                if (authusername) {
                    var username = userAttrs.username;
                    if (authusername === username) {
                        var USER = DB_USERS[username];
                        if (USER) {
                            for (var attr in userAttrs) {
                                USER[attr] = angular.copy(userAttrs[attr]);
                            }
                            resolve({user: USER});
                        } else {
                            reject({errmsg: 'User ' + username + ' not found'});
                        }
                    } else {
                        reject({errmsg: 'The current user ' + authusername + ' cannot update user ' + username});
                    }
                } else {
                    reject({errmsg: 'User not logged'});
                }
            }, 500);
        });
    }

}

})();
