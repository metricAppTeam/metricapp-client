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
    .when('/home', {
        templateUrl: 'dist/views/home/home.view.html'
    })
    .when('/notifications', {
        templateUrl: 'dist/views/notification/notifications.view.html'
    })
    .when('/messages', {
        templateUrl: 'dist/views/message/messages.view.html'
    })
    .when('/profile', {
        templateUrl: 'dist/views/people/profile.view.html'
    })
    .when('/profile_pop_up', {
        templateUrl: 'dist/views/people/profile_pop_up.view.html'
    })
    .when('/settings', {
        templateUrl: 'dist/views/setting/settings.view.html'
    })
    .when('/grid', {
        templateUrl: 'dist/views/graph/grid/grid.view.html'
    })
    .when('/graph_draft', {
        templateUrl: 'dist/views/graph/draft/draft.view.html'
    })
    .when('/team', {
        templateUrl: 'dist/views/team/team.view.html'
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
    .when('/measurementgoal/:measurementgoalid', {
        templateUrl: 'dist/views/measurementgoal/measurementgoal.view.html'
    })
    .when('/metricatordashboard', {
        templateUrl: 'dist/views/home/metricatordashboard/metricatordashboard.view.html'
    })
    .when('/measurementgoalsearch', {
        templateUrl: 'dist/views/measurementgoal/measurementgoalsearch.view.html'
    })
    .when('/metricator', {
        templateUrl: 'dist/views/metricator/metricator.view.html'
    })
    .when('/measurementgoal/sendforapproval', {
        templateUrl: 'dist/views/measurementgoal/measurementgoal.sendforapproval.view.html'
    })
    .otherwise({
        redirectTo: '/404'
    });
}

})();
