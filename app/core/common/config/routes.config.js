(function() { 'use strict';

/************************************************************************************
* @ngdoc overview
* @name config.routes
* @module metricapp
* @requires $routeProvider
* @requires $locationProvider
*
* @description
* Defines the routing configuration for the whole app.
************************************************************************************/

angular.module('metricapp')

.config(routes);

routes.$inject = ['$routeProvider', '$locationProvider'];

function routes($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })
    .when('/signup', {
        templateUrl: 'dist/views/authentication/signup.view.html'
    })
    .when('/login', {
        templateUrl: 'dist/views/authentication/login.view.html'
    })
    .when('/dashboardExpert', {
        templateUrl: 'dist/views/dashboard/dashboardExpert/dashboardExpert.view.html'
    })
    .when('/dashboardMetricator', {
        templateUrl: 'dist/views/dashboard/dashboardMetricator/dashboardMetricator.view.html'
    })
    .when('/dashboardQuestioner', {
        templateUrl: 'dist/views/dashboard/dashboardQuestioner/dashboardQuestioner.view.html'
    })
    .when('/page', {
        templateUrl: 'dist/views/page/page.view.html'
    })
    .when('/home', {
        templateUrl: 'dist/views/home/home.view.html'
    })
    .when('/401', {
        templateUrl: 'dist/views/error/error401.view.html'
    })
    .when('/404', {
        templateUrl: 'dist/views/error/error404.view.html'
    })
    .when('/500', {
        templateUrl: 'dist/views/error/error500.view.html'
    })
    .when('/measurementgoal', {
        templateUrl: 'dist/views/measurementgoal/measurementgoal.view.html'
    })
    .when('/metricator', {
        templateUrl: 'dist/views/metricator/metricator.view.html'
    })
    .otherwise({
        redirectTo: '/404'
    });

    $locationProvider.html5Mode(true);
}

})();
