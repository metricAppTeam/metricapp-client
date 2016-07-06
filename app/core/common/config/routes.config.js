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
    .when('/profile/:username', {
        templateUrl: 'dist/views/profile/profile.view.html'
    })
    .when('/organization', {
        templateUrl: 'dist/views/organization/organization.view.html'
    })
    .when('/messages/:username', {
        templateUrl: 'dist/views/message/messages.view.html'
    })
    .when('/notifications', {
        templateUrl: 'dist/views/notification/notifications.view.html'
    })
    .when('/notifications/:notificationid', {
        templateUrl: 'dist/views/notification/notification.view.html'
    })
    .when('/grids', {
        templateUrl: 'dist/views/grid/grids.view.html'
    })
    .when('/grids/:gridid', {
        templateUrl: 'dist/views/grid/grid.view.html'
    })
    .when('/goals', {
        templateUrl: 'dist/views/grid/goal/goals.view.html'
    })
    .when('/goals/:goalid', {
        templateUrl: 'dist/views/grid/goal/goal.view.html'
    })
    .when('/teams', {
        templateUrl: 'dist/views/team/teams.view.html'
    })
    .when('/teams/:teamid', {
        templateUrl: 'dist/views/team/team.view.html'
    })
    .when('/tasks', {
        templateUrl: 'dist/views/task/tasks.view.html'
    })
    .when('/tasks/:taskid', {
        templateUrl: 'dist/views/task/task.view.html'
    })
    .when('/analytics', {
        templateUrl: 'dist/views/analytics/analytics.view.html'
    })
    .when('/analytics/:analyticid', {
        templateUrl: 'dist/views/analytics/analytic.view.html'
    })
    .when('/settings', {
        templateUrl: 'dist/views/setting/settings.view.html'
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
    .otherwise({
        redirectTo: '/404'
    });
}

})();
