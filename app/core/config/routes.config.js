/*******************************************************************************
* @ngdoc overview
* @name metricapp.config.routes
* @requires $routeProvider
* @requires $locationProvider
*
* @description
* Defines the routing configuration for the whole application.
*******************************************************************************/

(function() {
    'use strict';

    angular
        .module('metricapp')
        .config(routes);

    routes.$inject = ['$routeProvider', '$locationProvider'];

    function routes($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);

        $routeProvider
        .when('/', {
            redirectTo: '/home'
        })
        .when('/registration', {
            templateUrl: 'dist/views/registration/registration.view.html'
        })
        .when('/login', {
            templateUrl: 'dist/views/authentication/login.view.html'
        })
        .when('/home', {
            templateUrl: 'dist/views/home/home.view.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
    }

})();
