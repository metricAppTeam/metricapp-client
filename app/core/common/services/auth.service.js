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

    /********************************************************************************
    * @ngdoc method
    * @name login
    * @description
    * Autheticates with the specified credentials.
    * @param {Credentials} credentials The user credentials.
    * @returns {User} On success, the authenticated User; null otherwise.
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
                        reject('Wrong password for: ' + username);
                    }
                } else {
                    reject('Wrong username for: ' + username);
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
    * @returns {Response} Insert description here.
    ********************************************************************************/
    function logout() {
        var username = $cookies.getObject('globals').user.username;
        return $q(function(resolve, reject) {
            setTimeout(function() {
                var USER = DB_USERS[username];
                if (USER) {
                    USER.online = false;
                    resolve({username: username});
                } else {
                    reject('Wrong username for: ' + username);
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
        //console.log('GET-USER cookie');
        var user = $cookies.getObject('globals').user;
        /*console.log('GET-COOKIE globals.user WITH ' +
        'username=' + user.username + ' & ' +
        'role=' + user.role + ' & ' +
        'authdata=' + user.authdata);*/
        return user;
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
        /*console.log('SET-USER cookie WITH ' +
        'username=' + authuser.username + ' & ' +
        'password=' + authuser.password + ' & ' +
        'role=' + authuser.role);*/

        var authdata = authuser.username + ':' + authuser.password + ':' + authuser.role;

        $rootScope.globals = {
            user: {
                username: authuser.username,
                role: authuser.role,
                authdata: authdata
            }
        };

        $cookies.putObject('globals', $rootScope.globals);
        /*console.log('PUT-COOKIE globals.user WITH ' +
        'username=' + $rootScope.globals.user.username + ' & ' +
        'role=' + $rootScope.globals.user.role + ' & ' +
        'authdata=' + $rootScope.globals.user.authdata);*/

        $http.defaults.headers.common.Authorization = 'Basic ' + authdata;
        /*console.log('SET-HEADER common WITH ' +
        'Authorization=' + $http.defaults.headers.common.Authorization);*/
    }

    /********************************************************************************
    * @ngdoc method
    * @name clearUser
    * @description
    * Removes the user stored ito the cookie.
    ********************************************************************************/
    function clearUser() {
        //console.log('CLEAR-USER cookie');
        $rootScope.globals = {};
        $cookies.remove('globals');
        //console.log('REMOVE-COOKIE globals');
        $http.defaults.headers.common.Authorization = 'Basic';
        /*console.log('SET-HEADER common WITH ' +
        'Authorization=' + $http.defaults.headers.common.Authorization);
        */
    }

}

})();
