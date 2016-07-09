(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name EXPERT_ACTIONS
* @module metricapp
* @description
* Defines constants related to Expert's actions.
* - Grid:
* - Team:
* - Analytics:
************************************************************************************/

angular.module('metricapp')

.constant('EXPERT_ACTIONS', [
    {name: 'Grid',      href: '#/grid',         icon: 'codepen'},
    {name: 'Team',      href: '#/team',         icon: 'users'},
    {name: 'Tasks',     href: '#/tasks',        icon: 'tasks'}
]);

})();
