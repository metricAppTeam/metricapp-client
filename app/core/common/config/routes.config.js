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

    // MIC'S VERSION OF GRID
    /*
    .when('/graph', {
        templateUrl: 'dist/views/graph/grids/graph.view.html'
    })
    .when('/grids', {
        templateUrl: 'dist/views/graph/grids/grids.view.html'
    })
    .when('/graph_draft', {
        templateUrl: 'dist/views/graph/draft/draft.view.html'
    })
    .when('/analytics', {
        templateUrl: 'dist/views/graph/analytics/analytics.view.html'
    })
    .when('/teams', {
        templateUrl: 'dist/views/teams/teams.view.html'
    })

    */

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
    .when('/questions/:questionid', {
        templateUrl: 'dist/views/question/question.view.html'
    })

	// QUESTIONER
	.when('/questionCreation', {
        templateUrl: 'dist/views/questioner/questionerCreate/questionCreation.view.html'
    })
    .when('/questionSearch', {
        templateUrl: 'dist/views/questioner/questionerSearch/questionSearch.view.html'
    })
    .when('/questionUpdate', {
        templateUrl: 'dist/views/questioner/questionerUpdate/questionUpdate.view.html'
    })
    .when('/questionList', {
        templateUrl: 'dist/views/questioner/questionerList/questionList.view.html'
    })
    .when('/questions/:questionId', {
        templateUrl: 'dist/views/questioner/questionDetails.view.html'  
    })
    .when('/measurementGoalQuestionList', {
        templateUrl: 'dist/views/questioner/measurementGoal/measurementGoalQuestionsList.view.html'
    })
    .when('/measurementGoalAddExistingQuestion', {
        templateUrl: 'dist/views/questioner/measurementGoal/measurementGoalAddExistingQuestion.view.html'
    })
    .when('/questionerMeasurementGoalList', {
        templateUrl: 'dist/views/questioner/measurementGoal/measurementGoalList.view.html'
    })

    // METRICS
    .when('/metrics', {
        templateUrl: 'dist/views/metric/metrics.view.html'
    })
    .when('/metrics/:metricid', {
        templateUrl: 'dist/views/metric/metricpage.view.html'
    })
    
    //MEASUREMENT GOALS
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
    .when('/measurementgoalchangestate', {
        templateUrl: 'dist/views/measurementgoal/measurementgoal.sendforapproval.view.html'
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
