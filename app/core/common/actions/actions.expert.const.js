(function() { 'use strict';

/************************************************************************************
* @ngdoc constant
* @name EXPERT_ACTIONS
* @module metricapp
* @description
* Defines constants related to Expert's actions.
* - Grids:
* - Teams:
************************************************************************************/

angular.module('metricapp')

.constant('EXPERT_ACTIONS', [
    {name: 'Grids', href: '#/grids', icon: 'codepen'},
    {name: 'Teams', href: '#/teams', icon: 'users'},
    {name: 'Metrics', 				href: '#/metrics',             icon:'fa fa-tasks'         }
]);

})();
