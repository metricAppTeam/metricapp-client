/*******************************************************************************
* @ngdoc overview
* @name backsim
* @module metricapp
* @requires $http
* @requires $httpBackend
* @requires $filter
* @requires REST_SERVICE
*
* @description
* Defines the backend simulation configuration for the whole application.
*******************************************************************************/

(function() {
    'use strict';
/*
    angular
        .module('metricapp')
        .run(backsim);

    backsim.$inject = ['$httpBackend', '$filter', 'REST_SERVICE'];

    function backsim($httpBackend, $filter, REST_SERVICE) {
        var users = [
            { username: 'expert', password: 'password' },
            { username: 'questioner', password: 'password' },
            { username: 'metricator', password: 'password' }
        ];

        $httpBackend.whenGET(REST_SERVICE + '/api/users').respond(users);
        $httpBackend.whenGET(REST_SERVICE + '/api/users/query?username=expert').respond($filter('filter')(users, {username: 'expert'}, true));
        $httpBackend.whenGET(REST_SERVICE + '/api/users/query?username=questioner').respond($filter('filter')(users, {username: 'questioner'}, true));
        $httpBackend.whenGET(REST_SERVICE + '/api/users/query?username=metricator').respond($filter('filter')(users, {username: 'metricator'}, true));

        $httpBackend.whenPOST(REST_SERVICE + '/api/signin').respond(function(method, url, data) {
            var credentials = angular.fromJSON(data);
            var username = credentials.username;
            var password = credentials.password;

            for (var user in users) {
                if (user.username === username && user.password === password) {
                    return {username: username, password: password};
                }
            }
        });

        $httpBackend.whenPOST(REST_SERVICE + '/api/signout').respond(function(method, url, data) {

        });

        $httpBackend.whenPOST(REST_SERVICE + '/api/users/create').respond(function(method, url, data) {
            var user = angular.fromJSON(data);
            users.push(user);
        });

        $httpBackend.whenPOST(REST_SERVICE + '/api/users/remove').respond(function(method, url, data) {
            var user = angular.fromJSON(data);
            var username = user.username;
            var password = user.password;

            for (var i = 0; i < users.length; i++) {
                var u = users[i];
                if (u.username === username && u.password === password) {
                    users.splice(i, 1);
                    break;
                }
            }
        });
    }
    */

})();
