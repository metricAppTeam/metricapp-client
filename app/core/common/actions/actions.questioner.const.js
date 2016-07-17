(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name QUESTIONER_ACTIONS
* @module metricapp
* @description
* Defines constants related to Questioner's actions.
* - QUESTIONER_ACTION_1:
************************************************************************************/

angular.module('metricapp')

.constant('QUESTIONER_ACTIONS', [
    {name: 'Profile', href: '#/profile', icon: 'user'},
    {name: 'Measurement Goals', href: '#/questionerMeasurementGoalList', icon: 'list'},
    {name: 'Search Questions', href: '#/questionSearch', icon: 'list'},
    {name: 'Create New Question', href: '#/questionCreation', icon: 'plus'},
    {name: 'Question list', href: '#/questionList', icon: 'list'}

]);

})();
