(function() { 'use strict';

/************************************************************************************
* @ngdoc configuration
* @name servermock
* @module metricapp
* @requires $http
* @requires $httpBackend
* @requires $filter
* @requires DbMockService
* @requires REST_SERVICE

* @requires ROLES
*
* @description
* Initializes the backend simulation server for the whole application.
************************************************************************************/

angular.module('metricapp')

.run(servermock);

servermock.$inject = ['$httpBackend', '$filter', 'DbMockService', 'REST_SERVICE'];

function servermock($httpBackend, $filter, DbMockService, REST_SERVICE) {
    var ROLES = DbMockService.ROLES;
    var USERS = DbMockService.USERS;
    var PROFILES = DbMockService.PROFILES;

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
            if (user.username === credentials.username &&
                user.password === credentials.password) {
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
    * SUBMIT MEASUREMENT GOAL
    ********************************************************************************/
    $httpBackend.whenPOST('http://127.0.0.1:8080/measurementgoal/')
    .respond(function(method, url, data, headers, params) {
        var registration = angular.fromJson(data);
        var message = 'Submit Success!';
        return [200, message, {}];
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
        var message = 'User registered';
        return [200, message, {}];
    });

    /********************************************************************************
    * USERS: EXIST WITH USERNAME
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/users/exist/username')
    .respond(function(method, url, data, headers, params) {
        var username = data;
        console.log('/api/users/exist/username WITH ' +
        'username=' + username);
        for (var i = 0; i < USERS.length; i++) {
            var user = USERS[i];
            if (user.username === username) {
                console.log('SUCCESS EXIST user WITH ' +
                'username=' + username);
                return [200, {exist: true}, {}];
            }
        }
        console.log('SUCCESS NOT EXIST user WITH ' +
        'username=' + username);
        return [200, {exist: false}, {}];
    });

    /********************************************************************************
    * USERS: EXIST WITH EMAIL
    ********************************************************************************/
    $httpBackend.whenPOST(REST_SERVICE.URL + '/api/users/exist/email')
    .respond(function(method, url, data, headers, params) {
        var email = data;
        console.log('/api/users/exist/email WITH ' +
        'email=' + email);
        for (var i = 0; i < PROFILES.length; i++) {
            var profile = PROFILES[i];
            if (profile.email === email) {
                console.log('SUCCESS EXIST user WITH ' +
                'email=' + email);
                return [200, {exist: true}, {}];
            }
        }
        console.log('SUCCESS NOT EXIST user WITH ' +
        'email=' + email);
        return [200, {exist: false}, {}];
    });

    $httpBackend.whenGET(/^dist\//).passThrough();
}

})();
