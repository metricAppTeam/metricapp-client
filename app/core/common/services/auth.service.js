(function() { 'use strict';

/************************************************************************************
* @ngdoc service
* @name AuthService
* @module metricapp
* @requires $http
* @requires $rootScope
* @requires $cookies
* @requires REST_SERVICE
* @requires ROLES
*
* @description
* Provides authentication services.
************************************************************************************/

angular.module('metricapp')

.service('AuthService', AuthService);

AuthService.$inject = ['$http', '$rootScope', '$cookies', '$q', 'REST_SERVICE', 'ROLES', 'DB_USERS'];

function AuthService($http, $rootScope, $cookies, $q, REST_SERVICE, ROLES, DB_USERS) {

    var service = this;

    service.ROLES = ROLES;

    service.login = login;
    service.logout = logout;
    service.getUser = getUser;
    service.setUser = setUser;
    service.clearUser = clearUser;
    service.getUsername = getUsername;
    service.isLogged = isLogged;

    service.editPassword = editPassword;

    /********************************************************************************
    * @ngdoc method
    * @name login
    * @description
    * Autheticates with the specified credentials.
    * @param {Credentials} credentials The user credentials.
    * @returns {User|Error} On success, the authuser;
    * an error message, otherwise.
    ***************************************************************************/
    function login(credentials) {
        var username = credentials.username;
        var password = credentials.password;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    if (USER.password === password) {
                        USER.online = true;
                        resolve({authuser: USER});
                    } else {
                        reject({errmsg: 'Wrong password for: ' + username});
                    }
                } else {
                    reject({errmsg: 'Wrong username for: ' + username});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name logout
    * @description
    * Deautheticates user with the specified credentials.
    * @param {Credentials} credentials The user credentials.
    * @returns {} Insert description here.
    ********************************************************************************/
    function logout() {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    USER.online = false;
                    clearUser();
                    resolve({username: username});
                } else {
                    reject({errmsg: 'Wrong username for: ' + username});
                }
            }, 500);
        });
    }

    /********************************************************************************
    * @ngdoc method
    * @name getUser
    * @description
    * Retrieves user stored into the cookie.
    * @returns {User} THe authuser stored into the cookie.
    ********************************************************************************/
    function getUser() {
        var globals = $cookies.getObject('globals');
        if (globals) {
            var user = globals.user;
            if (user) {
                return user;
            }
        }
        return null;
    }

    /********************************************************************************
    * @ngdoc method
    * @name setUser
    * @description
    * Stores the current user into a cookie.
    * @param {User} user Insert description here.
    * @returns {String} Insert description here.
    ********************************************************************************/
    function setUser(authuser) {
        var authdata = authuser.username + ':' + authuser.password + ':' + authuser.role;

        $rootScope.globals = {
            user: {}
        };
        $rootScope.globals.user = angular.copy(authuser);
        $rootScope.globals.user.authdata = authdata;



        $cookies.putObject('globals', $rootScope.globals);

        $http.defaults.headers.common.Authorization = 'Basic ' + authdata;
    }

    /********************************************************************************
    * @ngdoc method
    * @name clearUser
    * @description
    * Removes the user stored ito the cookie.
    ********************************************************************************/
    function clearUser() {
        $rootScope.globals = {};
        $cookies.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic';
    }

    /********************************************************************************
    * @ngdoc method
    * @name getUsername
    * @description
    * Retrieves the username of authuser, stored into the cookie.
    * @returns {String} The username of the authuser, if exists;
    * null, otherwise.
    ********************************************************************************/
    function getUsername() {
        var globals = $cookies.getObject('globals');
        if (globals) {
            var user = globals.user;
            if (user) {
                return user.username;
            }
        }
        return null;
    }

    /********************************************************************************
    * @ngdoc method
    * @name isLogged
    * @description
    * Check if the user is logged.
    * @returns {Boolean} True, if the user is logged;
    * false, otherwise.
    ********************************************************************************/
    function isLogged() {
        var globals = $cookies.getObject('globals');
        if (globals) {
            var user = globals.user;
            if (user) {
                return true;
            }
        }
        return false;
    }

    /********************************************************************************
    * @ngdoc method
    * @name editPassword
    * @description
    * Changes the password for authuser and deauthenticates it.
    * @param {String} oldPassword The user old password.
    * @param {String} newPassword The user new password.
    * @returns {String|Error} On success, the username for the authuser and a success
    * message;
    * an error message, otherwise.
    ********************************************************************************/
    function editPassword(oldPassword, newPassword) {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    if (USER.password === oldPassword) {
                        USER.password = newPassword;
                        // other deauthentication actions.
                        resolve({username: username, msg:'Successfully changed password for user ' + username});
                    } else {
                        reject({errmsg: 'Wrong old password for user ' + username});
                    }
                    USER.online = false;
                    resolve({username: username});
                } else {
                    reject({errmsg: 'User ' + username + ' not found'});
                }
            }, 500);
        });
    }

}

})();
