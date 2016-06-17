(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name QUESTIONER_ACTIONS
* @module metricapp
* @description
* Defines constants related to Questioner's actions.
* - QUESTIONER_ACTION_1:
* - QUESTIONER_ACTION_2:
* - QUESTIONER_ACTION_3:
************************************************************************************/

angular.module('metricapp')

.constant('QUESTIONER_ACTIONS', [
    {name: 'QUESTIONER_ACTION_1', href: '/questioner_action_1'},
    {name: 'QUESTIONER_ACTION_2', href: '/questioner_action_2'},
    {name: 'QUESTIONER_ACTION_3', href: '/questioner_action_3'}
]);

})();