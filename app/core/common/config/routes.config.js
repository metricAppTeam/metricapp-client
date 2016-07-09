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
        templateUrl: 'dist/views/user/profile.view.html'
    })
    .when('/profile/:username/analytics', {
        templateUrl: 'dist/views/user/analytics.view.html'
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
    .when('/grids/:gridid/analytics', {
        templateUrl: 'dist/views/grid/analytics.view.html'
    })
    .when('/goals', {
        templateUrl: 'dist/views/grid/goal/goals.view.html'
    })
    .when('/goals/:goalid', {
        templateUrl: 'dist/views/grid/goal/goal.view.html'
    })
    .when('/goals/:goalid/analytics', {
        templateUrl: 'dist/views/grid/goal/goal.analytics.view.html'
    })
    .when('/tasks', {
        templateUrl: 'dist/views/task/tasks.view.html'
    })
    .when('/tasks/:taskid', {
        templateUrl: 'dist/views/task/task.view.html'
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
