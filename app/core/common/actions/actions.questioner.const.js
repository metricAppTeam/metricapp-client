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
    {name: 'Action', href: '#/questioner_action', icon: 'cog'},
    {name: 'Metrics', 				href: '#/metrics',             icon:'fa fa-tasks'         }

]);

})();
