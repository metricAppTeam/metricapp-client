(function() { 'use strict';

/************************************************************************************
* @ngdoc configuration
* @name servermock
* @module metricapp
* @requires $http
* @requires $httpBackend
* @requires $filter
* @requires DbMockService
*
* @description
* Initializes the backend simulation server for the whole application.
************************************************************************************/

angular.module('metricapp')

.run(servermock);

servermock.$inject = ['$httpBackend', '$filter'];

function servermock($httpBackend, $filter) {

    /********************************************************************************
    * REST SERVICE
    ********************************************************************************/

    var REST_SERVICE = {
        DOMAIN: 'metricapp.com',
        PORT: 8090,
        URL: 'metricapp.com:8090'
    };

    /********************************************************************************
    * USERS DATA
    ********************************************************************************/

    var ROLES = {
        ALL:        '*',
        NONE:       'NONE',
        EXPERT:     'EXPERT',
        QUESTIONER: 'QUESTIONER',
        METRICATOR: 'METRICATOR'
    };

    var USERS = [
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

    var PROFILES = [
        {
            username: 'expert',
            firstname: 'Giacomo',
            lastname: 'Marciani',
            email: 'expert@domain.com'
        },
        {
            username: 'questioner',
            firstname: 'Marco',
            lastname: 'Piu',
            email: 'questioner@domain.com'
        },
        {
            username: 'metricator',
            firstname: 'Andrea',
            lastname: 'Gennusa',
            email: 'metricator@domain.com'
        },
        {
            username: 'default',
            firstname: 'Mario',
            lastname: 'Rossi',
            email: 'default@domain.com'
        }
    ];

    for (var role in ROLES) {
        console.log('role: ' + role);
    }

    for (var i=0; i < USERS.length; i++) {
        console.log('user.username: ' + USERS[i].username);
    }

    for (var i=0; i < PROFILES.length; i++) {
        console.log('profile.email: ' + PROFILES[i].email);
    }

    /********************************************************************************
    * AUTHENTICATION: LOGIN
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/login')
    .respond(function(method, url, data, headers, params) {
        var credentials = angular.fromJson(data);
        console.log('/api/login WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.username == credentials.username &&
                user.password == credentials.password) {
                var authuser = {
                    username: user.username,
                    password: user.password,
                    role: user.role
                };
                console.log('SUCCESS /api/login WITH ' +
                'username=' + authuser.username + ' & ' +
                'password=' + authuser.password + ' & ' +
                'role=' + authuser.role);
                return [200, authuser, {}];
            }
        }
        console.log('FAILURE /api/login 401 WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        return [401, {}, {}];
    });

    /********************************************************************************
    * AUTHENTICATION: LOGOUT
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/logout')
    .respond(function(method, url, data, headers, params) {
        var authorization = headers.Authorization;
        var authdata = authorization.split(' ')[1];
        console.log('authdata=' + authdata);
        var credentials = {
            username: authdata.split(':')[0],
            password: authdata.split(':')[1]
        };
        console.log('/api/logout WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.username === credentials.username &&
                user.password === credentials.password) {
                console.log('SUCCESS /api/logout WITH ' +
                'username=' + user.username + ' & ' +
                'password=' + user.password);
                return [200, credentials.username, {}];
            }
        }
        console.log('FAILURE /api/logout 401 WITH ' +
        'username=' + credentials.username + ' & ' +
        'password=' + credentials.password);
        return [401, credentials.username, {}];
    });

    /********************************************************************************
    * AUTHENTICATION: SIGN-UP
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/signup')
    .respond(function(method, url, data, headers, params) {
        var registration = angular.fromJson(data);
        var user = registration.user;
        var profile = registration.profile;
        console.log('/api/signup WITH ' +
        'username=' + user.username + ' & ' +
        'password=' + user.password + ' & ' +
        'role=' + user.role + ' & ' +
        'firstname=' + profile.firstname + ' & ' +
        'lastname=' + profile.lastname + ' & ' +
        'email=' + profile.email);
        profile.username = user.username;
        USERS.push(user);
        PROFILES.push(profile);
        console.log('SUCCESS /api/signup WITH ' +
        'username=' + user.username + ' & ' +
        'password=' + user.password + ' & ' +
        'role=' + user.role + ' & ' +
        'firstname=' + profile.firstname + ' & ' +
        'lastname=' + profile.lastname + ' & ' +
        'email=' + profile.email);
        return [200, {}, {}];
    });

    /********************************************************************************
    * USERS: EXIST WITH USERNAME
    ********************************************************************************/
    $httpBackend.whenGET(REST_SERVICE.URL + '/api/users/exists/username')
    .respond(function(method, url, data, headers, params) {
        var username = data;
        console.log('/api/users/exists/username WITH ' +
        'username=' + username);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.username === username) {
                console.log('SUCCESS EXISTS user WITH ' +
                'username=' + username);
                return [200, {exists: true}, {}];
            }
        }
        console.log('SUCCESS NOT EXISTS user WITH ' +
        'username=' + username);
        return [200, {exists: false}, {}];
    });

    /********************************************************************************
    * USERS: EXIST WITH EMAIL
    ********************************************************************************/
    $httpBackend.whenGET(REST_SERVICE.URL + '/api/users/exists/email')
    .respond(function(method, url, data, headers, params) {
        var email = data;
        console.log('/api/users/exists/email WITH ' +
        'email=' + email);
        for (var i = 0; i < PROFILES.length; i++) {
            var profile = PROFILES[i];
            if (profile.email === email) {
                console.log('SUCCESS EXISTS user WITH ' +
                'email=' + email);
                return [200, {exists: true}, {}];
            }
        }
        console.log('SUCCESS NOT EXISTS user WITH ' +
        'email=' + email);
        return [200, {exists: false}, {}];
    });

    $httpBackend.whenGET(/^dist\//).passThrough();
}

})();
