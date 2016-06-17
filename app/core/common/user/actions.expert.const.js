(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name EXPERT_ACTIONS
* @module metricapp
* @description
* Defines constants related to Expert's actions.
* - EXPERT_ACTION_1:
* - EXPERT_ACTION_2:
* - EXPERT_ACTION_3:
************************************************************************************/

angular.module('metricapp')

.constant('EXPERT_ACTIONS', [
    {name: 'EXPERT_ACTION_1', href: '/expert_action_1'},
    {name: 'EXPERT_ACTION_2', href: '/expert_action_2'},
    {name: 'EXPERT_ACTION_3', href: '/expert_action_3'}
]);

})();
