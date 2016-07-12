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

    // MAIN
    .when('/', {
        redirectTo: '/home'
    })
    .when('/home', {
        templateUrl: 'dist/views/home/home.view.html'
    })

    // AUTHENTICATION
    .when('/login', {
        templateUrl: 'dist/views/authentication/login.view.html'
    })
    .when('/signup', {
        templateUrl: 'dist/views/authentication/signup.view.html'
    })

    // USER
    .when('/profile', {
        templateUrl: 'dist/views/user/profile.view.html'
    })
    .when('/profile/:username', {
        templateUrl: 'dist/views/user/profile.view.html'
    })
    .when('/profile/:username/analytics', {
        templateUrl: 'dist/views/user/analytics.view.html'
    })

    // ORGANIZATION
    .when('/organization', {
        templateUrl: 'dist/views/organization/organization.view.html'
    })

    // MESSAGES
    .when('/messages', {
        templateUrl: 'dist/views/chat/messages.view.html'
    })
    .when('/messages/:username', {
        templateUrl: 'dist/views/chat/messages.view.html'
    })

    // NOTIFICATIONS
    .when('/notifications', {
        templateUrl: 'dist/views/notification/notifications.view.html'
    })

    // GRIDS
    .when('/grids', {
        templateUrl: 'dist/views/grid/grids.view.html'
    })
    .when('/grids/:gridid', {
        templateUrl: 'dist/views/grid/grid.view.html'
    })
    .when('/grids/:gridid/analytics', {
        templateUrl: 'dist/views/grid/analytics.view.html'
    })

    // TEAMS
    .when('/teams', {
        templateUrl: 'dist/views/team/teams.view.html'
    })
    .when('/teams/:teamid', {
        templateUrl: 'dist/views/team/team.view.html'
    })
    .when('/teams/:teamid/analytics', {
        templateUrl: 'dist/views/team/analytics.view.html'
    })

    // MEASUREMENT GOALS
    .when('/mgoals', {
        templateUrl: 'dist/views/mgoal/mgoals.view.html'
    })
    .when('/mgoals/:goalid', {
        templateUrl: 'dist/views/mgoal/mgoal.view.html'
    })

    // QUESTIONS
    .when('/questions', {
        templateUrl: 'dist/views/question/questions.view.html'
    })
    .when('/mgoals/:questionid', {
        templateUrl: 'dist/views/question/question.view.html'
    })

    // METRICS
    .when('/metrics', {
        templateUrl: 'dist/views/metric/metrics.view.html'
    })
    .when('/metrics/:metricid', {
        templateUrl: 'dist/views/metric/metric.view.html'
    })

    // ERRORS
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
